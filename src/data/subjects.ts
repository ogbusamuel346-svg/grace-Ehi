import { SubjectInfo } from '../types';
import { economicsQuestions } from './economicsQuestions';
import { accountingQuestions } from './accountingQuestions';

export const subjects: Record<string, SubjectInfo> = {
  economics: {
    id: 'economics',
    name: 'Economics',
    code: 'ECO 111 / 211',
    questionCount: economicsQuestions.length,
    durationMinutes: 60,
    description: 'Master micro & macroeconomic principles, Nigerian monetary policies, public finance, and international trade.',
    topicsSummary: [
      'Microeconomics & Elasticity',
      'Theory of Production & Costs',
      'Market Structures & Pricing',
      'National Income Accounting',
      'Money, Banking & Central Bank of Nigeria',
      'Inflation, Public Finance & Fiscal Policy',
      'International Trade & Balance of Payments',
      'Nigerian Economic History & Solid Minerals'
    ],
    collegeContext: 'Curriculum-aligned for College of Education, Akwanga (NCE I & II)'
  },
  accounting: {
    id: 'accounting',
    name: 'Accounting',
    code: 'ACC 111 / 211',
    questionCount: accountingQuestions.length,
    durationMinutes: 60,
    description: 'Practice double-entry bookkeeping, trial balance, depreciation, bank reconciliation, and final accounts.',
    topicsSummary: [
      'Concepts, Conventions & Duality',
      'Books of Original Entry & Cash Book',
      'The Ledger & Double Entry Rules',
      'Trial Balance & Rectification of Errors',
      'Bank Reconciliation Statements',
      'Depreciation & Disposal of Assets',
      'Accruals, Prepayments & Provisions',
      'Partnership & Company Accounts'
    ],
    collegeContext: 'Curriculum-aligned for College of Education, Akwanga (NCE I & II)'
  }
};
