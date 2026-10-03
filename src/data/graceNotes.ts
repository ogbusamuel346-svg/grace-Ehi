export interface StudyTip {
  title: string;
  advice: string;
  category: 'Economics' | 'Accounting' | 'Exam Strategy';
}

export const graceStudyTips: StudyTip[] = [
  {
    category: 'Exam Strategy',
    title: 'Pacing Your CBT Time',
    advice: 'In a 60-question CBT exam with 60 minutes, spend roughly 45 to 50 seconds per question. Flag difficult numerical or partnership questions and return to them during your final 10-minute sweep.'
  },
  {
    category: 'Economics',
    title: 'Shifts vs Movements along the Curve',
    advice: 'Grace, remember: only a change in the price of the commodity itself causes a movement along the demand or supply curve. Any other factor (income, tastes, taxes, weather) causes the entire curve to shift!'
  },
  {
    category: 'Accounting',
    title: 'Trial Balance Differences & Suspense',
    advice: 'Errors of omission, commission, and principle never affect the trial balance totals! Only single-sided errors or mathematical casting mistakes create a difference that goes to the Suspense Account.'
  },
  {
    category: 'Economics',
    title: 'The Multiplier Formula',
    advice: 'Multiplier k = 1 / MPS or 1 / (1 - MPC). Because MPC + MPS = 1, a higher marginal propensity to consume means a stronger multiplier effect in national income.'
  },
  {
    category: 'Accounting',
    title: 'Bank Reconciliation Order',
    advice: 'Always update the Cash Book first with unrecorded bank charges, direct credits, and dishonoured cheques before preparing the final Bank Reconciliation with unpresented cheques and uncredited lodgements.'
  },
  {
    category: 'Exam Strategy',
    title: 'Calm Confidence',
    advice: 'Grace, you have put in the hours and dedication. Breathe deeply, read each option carefully (especially "EXCEPT" or "NOT"), and trust your preparation!'
  }
];

export function getGraceRemark(percentage: number): { grade: string; remark: string; message: string } {
  if (percentage >= 80) {
    return {
      grade: 'Distinction (A)',
      remark: 'Outstanding Academic Excellence',
      message: 'Magnificent performance, Grace! You have mastered these core concepts thoroughly. You are more than ready to shine brilliantly at College of Education, Akwanga!'
    };
  } else if (percentage >= 70) {
    return {
      grade: 'Upper Credit (B)',
      remark: 'Very Strong Competence',
      message: 'Well done, Grace! A very commendable score. Review the few questions you missed in the Review tab to lock down that flawless Distinction.'
    };
  } else if (percentage >= 60) {
    return {
      grade: 'Credit (C)',
      remark: 'Solid Understanding',
      message: 'Good effort, Grace! You clearly understand the core fundamentals. A quick review of the explanations will help cement your command over the tricky topics.'
    };
  } else if (percentage >= 50) {
    return {
      grade: 'Pass (P)',
      remark: 'Fair Effort',
      message: 'You made the benchmark, Grace! Use the detailed question review below to study each concept and try another timed session.'
    };
  } else {
    return {
      grade: 'Needs Revision',
      remark: 'Keep Going — Practice Makes Perfect',
      message: 'Do not be discouraged, Grace. Every master was once a beginner. Take time to study the step-by-step explanations in the review section below and take the practice test again!'
    };
  }
}
