/* eslint-disable no-restricted-syntax */

const uuidv4 = require('uuid/v4');

const Org = require('../models/org.model');
const OrgUnit = require('../models/orgUnit.model');
const OrgQualification = require('../models/org-qualification.model');
const OrgQualificationUnit = require('../models/org-qualification-unit.model');
const TgovAssessmentCondition = require('../models/tgov-assessment-condition.model');
const TgovElement = require('../models/tgov-element.model');
const TgovKnowledgeEvidence = require('../models/tgov-knowledge-evidence.model');
const TgovPerformanceCriteria = require('../models/tgov-performance-criteria.model');
const TgovPerformanceEvidence = require('../models/tgov-performance-evidence.model');
const TgovQualification = require('../models/tgov-qualification.model');
const TgovQualRelease = require('../models/tgov-qual-release.model');
const TgovQualUnit = require('../models/tgov-qual-unit.model');
const TgovUnit = require('../models/tgov-unit.model');
const TgovUnitRelease = require('../models/tgov-unit-release.model');
const TgAssessmentCondition = require('../models/tgov/tg-assessment-condition');
const TgElement = require('../models/tgov/tg-element');
const TgKnowledgeEvidence = require('../models/tgov/tg-knowledge-evidence');
const TgOrganisation = require('../models/tgov/tg-organisation.model');
const TgPerformanceCriteria = require('../models/tgov/tg-performance-criteria');
const TgPerformanceEvidence = require('../models/tgov/tg-performance-evidence');
const TgQualRelease = require('../models/tgov/tg-qual-release.model');
const TgQualUnitGridEntry = require('../models/tgov/tg-qual-unit-grid-entry.model');
const TgScope = require('../models/tgov/tg-scope.model');
const TgScopedQualification = require('../models/tgov/tg-scoped-qualification.model');
const TgScopedUnit = require('../models/tgov/tg-scoped-unit.model');
const TgUnitRelease = require('../models/tgov/tg-unit-release.model');
const eventEmitter = require('../../config/event-emitter');

const mapSeries = async (array) => {
  const result = [];
  for await (const item of array) result.push(item);
  return result;
};

eventEmitter.on('VerifyUser', async (code, organisationId) => {
  if (!code || !organisationId) return;
  const tgOrganisation = await TgOrganisation.findOrganisationByCode(code);
  const tgScopes = await TgScope.findScopesByOrganisationId(tgOrganisation.id);
  const addedAssessmentConditions = [];
  const addedElements = [];
  const addedKnowledgeEvidences = [];
  const addedPerformanceCriteria = [];
  const addedPerformanceEvidences = [];
  const addedQualifications = [];
  const addedQualReleases = [];
  const addedQualUnits = [];
  const addedUnits = [];
  const addedUnitReleases = [];
  const orgUnitIDByUnitID = {};

  await mapSeries(
    tgScopes.map(async (tgScope) => {
      if (tgScope.training_component_type !== 'Unit') return;
      const { tgUnit } =
        (await TgScopedUnit.findScopedUnitByScopeId(tgScope.id)) || {};
      if (!tgUnit) return;
      const tgUnitReleases =
        (await TgUnitRelease.findUnitReleasesByUnitId(tgUnit.id)) || [];

      // Create units.
      if (!addedUnits.includes(tgUnit.id)) {
        addedUnits.push(tgUnit.id);
        const existingUnit = await TgovUnit.findUnitById(tgUnit.id);

        if (!existingUnit) {
          await TgovUnit.createUnit(tgUnit);
        }

        const orgUnit = await OrgUnit.addOrgUnit({
          ou_id_org: organisationId,
          ou_id_orgunit: uuidv4(),
          ou_id_unit: tgUnit.id,
        });
        orgUnitIDByUnitID[tgUnit.id] = orgUnit.ou_id_orgunit;
      }

      // Create unit releases.
      if (tgUnitReleases.length) {
        await mapSeries(
          tgUnitReleases.map(async (tgUnitRelease) => {
            const tgAssessmentConditions =
              await TgAssessmentCondition.findAssessmentConditionsByUnitReleaseId(
                tgUnitRelease.id
              );
            const tgElements = await TgElement.findElementsByUnitReleaseId(
              tgUnitRelease.id
            );
            const tgKnowledgeEvidences =
              await TgKnowledgeEvidence.findKnowledgeEvidencesByUnitReleaseId(
                tgUnitRelease.id
              );
            const tgPerformanceEvidences =
              await TgPerformanceEvidence.findPerformanceEvidencesByUnitReleaseId(
                tgUnitRelease.id
              );

            if (!addedUnitReleases.includes(tgUnitRelease.id)) {
              addedUnitReleases.push(tgUnitRelease.id);
              const existingUnitRelease =
                await TgovUnitRelease.findUnitReleaseById(tgUnitRelease.id);

              if (!existingUnitRelease) {
                await TgovUnitRelease.createUnitRelease(tgUnitRelease);
              }
            }

            // Create assessment conditions.
            if (tgAssessmentConditions.length) {
              await mapSeries(
                tgAssessmentConditions.map(async (tgAssessmentCondition) => {
                  if (
                    !addedAssessmentConditions.includes(
                      tgAssessmentCondition.id
                    )
                  ) {
                    addedAssessmentConditions.push(tgAssessmentCondition.id);
                    const existingAssessmentCondition =
                      await TgovAssessmentCondition.findAssessmentConditionById(
                        tgAssessmentCondition.id
                      );

                    if (!existingAssessmentCondition) {
                      await TgovAssessmentCondition.createAssessmentCondition(
                        tgAssessmentCondition
                      );
                    }
                  }
                })
              );
            }

            // Create elements.
            if (tgElements.length) {
              await mapSeries(
                tgElements.map(async (tgElement) => {
                  const tgPerformanceCriteria =
                    await TgPerformanceCriteria.findPerformanceCriteriaByElementId(
                      tgElement.id
                    );

                  if (!addedElements.includes(tgElement.id)) {
                    addedElements.push(tgElement.id);
                    const existingElement = await TgovElement.findElementById(
                      tgElement.id
                    );

                    if (!existingElement) {
                      await TgovElement.createElement(tgElement);
                    }
                  }

                  // Create performance criteria.
                  if (tgPerformanceCriteria.length) {
                    await mapSeries(
                      tgPerformanceCriteria.map(async (data) => {
                        if (!addedPerformanceCriteria.includes(data.id)) {
                          addedPerformanceCriteria.push(data.id);
                          const existingPerformanceCriteria =
                            await TgovPerformanceCriteria.findPerformanceCriteriaById(
                              data.id
                            );

                          if (!existingPerformanceCriteria) {
                            await TgovPerformanceCriteria.createPerformanceCriteria(
                              data
                            );
                          }
                        }
                      })
                    );
                  }
                })
              );
            }

            // Create performance evidences.
            if (tgPerformanceEvidences.length) {
              await mapSeries(
                tgPerformanceEvidences.map(async (tgPerformanceEvidence) => {
                  if (
                    !addedPerformanceEvidences.includes(
                      tgPerformanceEvidence.id
                    )
                  ) {
                    addedPerformanceEvidences.push(tgPerformanceEvidence.id);
                    const existingPerformanceEvidence =
                      await TgovPerformanceEvidence.findPerformanceEvidenceById(
                        tgPerformanceEvidence.id
                      );

                    if (!existingPerformanceEvidence) {
                      await TgovPerformanceEvidence.createPerformanceEvidence(
                        tgPerformanceEvidence
                      );
                    }
                  }
                })
              );
            }

            // Create knowledge evidences.
            if (tgKnowledgeEvidences.length) {
              await mapSeries(
                tgKnowledgeEvidences.map(async (tgKnowledgeEvidence) => {
                  if (
                    !addedKnowledgeEvidences.includes(tgKnowledgeEvidence.id)
                  ) {
                    addedKnowledgeEvidences.push(tgKnowledgeEvidence.id);
                    const existingKnowledgeEvidence =
                      await TgovKnowledgeEvidence.findKnowledgeEvidenceById(
                        tgKnowledgeEvidence.id
                      );

                    if (!existingKnowledgeEvidence) {
                      await TgovKnowledgeEvidence.createKnowledgeEvidence(
                        tgKnowledgeEvidence
                      );
                    }
                  }
                })
              );
            }
          })
        );
      }
    })
  );

  await mapSeries(
    tgScopes.map(async (tgScope) => {
      if (tgScope.training_component_type !== 'Qualification') return;
      const { tgQualification } =
        (await TgScopedQualification.findScopedQualificationByScopeId(
          tgScope.id
        )) || {};
      if (!tgQualification) return;
      const tgQualReleases =
        (await TgQualRelease.findQualReleasesByQualificationId(
          tgQualification.id
        )) || [];
      let orgQualification;

      // Create qualifications.
      if (!addedQualifications.includes(tgQualification.id)) {
        addedQualifications.push(tgQualification.id);
        const existingQualification =
          await TgovQualification.findQualificationById(tgQualification.id);

        if (!existingQualification) {
          await TgovQualification.createQualification(tgQualification);
        }

        orgQualification = await OrgQualification.addQualification({
          oq_id_org: organisationId,
          oq_id_orgqual: uuidv4(),
          oq_id_qual: tgQualification.id,
        });
      }

      // Create qualification releases.
      if (tgQualReleases.length && orgQualification) {
        await mapSeries(
          tgQualReleases.map(async (tgQualRelease, index) => {
            const tgQualUnitGridEntries =
              await TgQualUnitGridEntry.findQualUnitGridEntriesByQualReleaseId(
                tgQualRelease.id
              );

            if (!addedQualReleases.includes(tgQualRelease.id)) {
              addedQualReleases.push(tgQualRelease.id);
              const existingQualRelease =
                await TgovQualRelease.findQualReleaseById(tgQualRelease.id);

              if (!existingQualRelease) {
                await TgovQualRelease.createQualRelease(tgQualRelease);
              }
            }

            // Create maps between qualification releases and units.
            if (tgQualUnitGridEntries.length) {
              await mapSeries(
                tgQualUnitGridEntries.map(async (data) => {
                  if (
                    !addedQualUnits.includes(data.id) &&
                    addedUnits.includes(data.unit_id)
                  ) {
                    addedQualUnits.push(data.id);
                    const existingQualUnit =
                      await TgovQualUnit.findQualUnitById(data.id);

                    if (!existingQualUnit) {
                      await TgovQualUnit.createQualUnit(data);
                    }

                    if (!index) {
                      await new OrgQualificationUnit().save({
                        oqu_id_orgqual: orgQualification.oq_id_orgqual,
                        oqu_id_orgqual_unit: uuidv4(),
                        oqu_id_orgunit: orgUnitIDByUnitID[data.unit_id],
                        oqu_is_essential: data.is_essential || 0,
                      });
                    }
                  }
                })
              );
            }
          })
        );
      }
    })
  );

  await Org.completeImporting(organisationId);
});
