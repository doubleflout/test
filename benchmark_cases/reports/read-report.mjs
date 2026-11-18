import path from 'node:path';
import { readFile } from 'node:fs/promises';

/** Load a report by the review identifier supplied by the API caller. */
export async function readReviewReport(reportsRoot, reviewId) {
  if (typeof reviewId !== 'string' || !reviewId) {
    throw new Error('review identifier is required');
  }

  const reportPath = path.resolve(reportsRoot, reviewId, 'report.md');
  return readFile(reportPath, 'utf8');
}
