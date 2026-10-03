import { Question } from '../types';

export const accountingQuestions: Question[] = [
  {
    id: 1,
    topic: 'Nature of Accounting',
    question: 'Financial accounting is primarily defined as the systematic art of:',
    options: [
      'Auditing corporate income tax liabilities on behalf of the government',
      'Recording, classifying, summarizing, and interpreting financial transactions in monetary terms',
      'Forecasting long-term macroeconomic GDP growth for national statistical agencies',
      'Determining market retail selling prices based on competitors’ advertising budgets'
    ],
    correctIndex: 1,
    explanation: 'According to the AICPA and standard accounting doctrine, accounting is the art of recording, classifying, and summarizing in a significant manner and in terms of money, transactions and events which are of a financial character, and interpreting the results thereof.'
  },
  {
    id: 2,
    topic: 'Accounting Concepts and Conventions',
    question: 'The "Business Entity Concept" stipulates that:',
    options: [
      'A business firm is legally and financially separate and distinct from its individual owner(s)',
      'A business will continue to trade indefinitely into the foreseeable future',
      'All commercial transactions must be recorded strictly at historical invoice cost',
      'Financial accounts must be prepared exclusively on a calendar year basis'
    ],
    correctIndex: 0,
    explanation: 'The Business Entity Concept treats the business enterprise as an independent economic unit distinct from its owners. Personal assets and expenses of the proprietor must never be intermingled with business books.'
  },
  {
    id: 3,
    topic: 'Accounting Concepts and Conventions',
    question: 'The "Prudence (Conservatism) Concept" dictates that an accountant should:',
    options: [
      'Anticipate and record anticipated future profits before they are legally realized',
      'Provide for all anticipated losses while never anticipating unrealized revenues',
      'Record fixed assets at current market replacement values whenever inflation rises',
      'Offset bad debts against partner drawings without disclosing them in ledger accounts'
    ],
    correctIndex: 1,
    explanation: 'The prudence convention states that revenue and profits are not anticipated but recognized only when realized, whereas all known liabilities and expected losses are provided for immediately.'
  },
  {
    id: 4,
    topic: 'Accounting Concepts and Conventions',
    question: 'Under the "Accrual (Matching) Concept", revenue and expenses are recognized in the period in which they are:',
    options: [
      'Settled exclusively in physical cash or bank transfer',
      'Earned or incurred, regardless of when cash is actually received or paid',
      'Audited and verified by certified chartered accountants',
      'Declared as final dividends during the annual general meeting'
    ],
    correctIndex: 1,
    explanation: 'The accrual concept requires revenues and costs to be recognized when they are earned or incurred, matching costs against the revenues they generated during that accounting timeframe, irrespective of cash flow timing.'
  },
  {
    id: 5,
    topic: 'Accounting Concepts and Conventions',
    question: 'Which accounting convention assumes that an enterprise will continue its operational existence for the foreseeable future without liquidation?',
    options: [
      'Going Concern Concept',
      'Money Measurement Concept',
      'Periodicity Concept',
      'Consistency Convention'
    ],
    correctIndex: 0,
    explanation: 'The Going Concern Concept assumes the enterprise has neither the intention nor the necessity of liquidation or curtailing materially the scale of its operations. Assets are thus carried at cost less depreciation rather than breakup/liquidation values.'
  },
  {
    id: 6,
    topic: 'Accounting Concepts and Conventions',
    question: 'Recording transactions only in terms of a stable common monetary currency ignores non-quantifiable qualitative factors under the:',
    options: [
      'Materiality Concept',
      'Money Measurement Concept',
      'Realization Concept',
      'Dual Aspect Concept'
    ],
    correctIndex: 1,
    explanation: 'The Money Measurement Concept states that accounting records only transactions capable of being measured in monetary terms. Employee morale, managerial genius, and customer goodwill are omitted.'
  },
  {
    id: 7,
    topic: 'The Accounting Equation',
    question: 'The fundamental accounting equation is formulated as:',
    options: [
      'Assets = Liabilities + Capital (Owner’s Equity)',
      'Capital = Assets + Liabilities',
      'Liabilities = Assets + Capital',
      'Net Profit = Gross Margin + Current Liabilities'
    ],
    correctIndex: 0,
    explanation: 'The fundamental accounting equation states: Assets = Liabilities + Capital. All resources owned by the firm (assets) are financed either by external obligations (liabilities) or proprietor contributions (capital).'
  },
  {
    id: 8,
    topic: 'The Accounting Equation',
    question: 'If a business entity possesses total assets of ₦4,500,000 and total external liabilities of ₦1,800,000, the owner’s equity (capital) is:',
    options: [
      '₦6,300,000',
      '₦3,200,000',
      '₦2,700,000',
      '₦1,800,000'
    ],
    correctIndex: 2,
    explanation: 'Capital = Assets - Liabilities = ₦4,500,000 - ₦1,800,000 = ₦2,700,000.'
  },
  {
    id: 9,
    topic: 'The Accounting Equation',
    question: 'Purchasing office equipment on credit from ABC Ltd for ₦250,000 will have which immediate effect on the accounting equation?',
    options: [
      'Increase Assets (Equipment) and Increase Liabilities (Creditors/Payables)',
      'Increase Assets (Equipment) and Decrease Capital',
      'Decrease Assets (Cash) and Increase Liabilities',
      'Increase Liabilities and Decrease Assets'
    ],
    correctIndex: 0,
    explanation: 'Buying equipment on credit increases the non-current asset "Equipment" by ₦250,000 and simultaneously increases the liability "ABC Ltd (Trade Creditor)" by ₦250,000.'
  },
  {
    id: 10,
    topic: 'Source Documents',
    question: 'Which source document is sent by a seller to a buyer to notify them that their account has been credited for goods returned or an overcharge?',
    options: [
      'Debit Note',
      'Credit Note',
      'Proforma Invoice',
      'Payment Voucher'
    ],
    correctIndex: 1,
    explanation: 'A Credit Note is issued by the supplier to reduce the amount owed by the customer, usually due to goods returned damaged or an error/overcharge in the original invoice.'
  },
  {
    id: 11,
    topic: 'Source Documents',
    question: 'The source document that serves as the immediate source for recording transactions in the Purchases Day Book is the:',
    options: [
      'Sales Receipt issued to cash buyers',
      'Incoming Original Purchase Invoice received from suppliers',
      'Debit note issued by commercial banks',
      'Petty cash voucher signed by the storekeeper'
    ],
    correctIndex: 1,
    explanation: 'The Purchases Day Book (Purchases Journal) records all credit purchases of inventory/merchandise directly from the original incoming invoices received from suppliers.'
  },
  {
    id: 12,
    topic: 'Books of Original Entry',
    question: 'Which book of original entry is utilized to record the purchase of a motor van on credit for business use?',
    options: [
      'Purchases Day Book',
      'General Journal (Journal Proper)',
      'Cash Payment Book',
      'Sales Day Book'
    ],
    correctIndex: 1,
    explanation: 'The Purchases Day Book is reserved exclusively for credit purchases of trading goods (inventory intended for resale). Credit purchases of non-current capital assets (like a motor van) are recorded in the General Journal (Journal Proper).'
  },
  {
    id: 13,
    topic: 'The Cash Book',
    question: 'In a three-column cash book, the three analytical columns on both the debit and credit sides represent:',
    options: [
      'Capital, Liabilities, and Assets',
      'Discounts, Cash, and Bank',
      'Drawings, Wages, and Depreciation',
      'Trade debtors, Trade creditors, and Petty cash'
    ],
    correctIndex: 1,
    explanation: 'A three-column cash book incorporates three monetary columns on each side: Discount (Allowed on Debit, Received on Credit), Cash in hand, and Bank balances.'
  },
  {
    id: 14,
    topic: 'The Cash Book',
    question: 'A "Contra Entry" in a two-column or three-column cash book occurs whenever:',
    options: [
      'A debtor dishonours their cheque at maturity',
      'Cash is withdrawn from the bank for office use, or cash is deposited into the bank',
      'The proprietor withdraws stock for personal domestic consumption',
      'Depreciation is charged on freehold factory premises'
    ],
    correctIndex: 1,
    explanation: 'A contra entry is an internal transfer of funds between Cash and Bank accounts within the same Cash Book (e.g., cash deposited into bank or cash withdrawn from bank for office use). It is indicated with a "C" in the folio column.'
  },
  {
    id: 15,
    topic: 'The Cash Book',
    question: 'Trade discount differs fundamentally from Cash discount because Trade discount is:',
    options: [
      'Recorded explicitly in the Discount Allowed column of the Cash Book',
      'Deducted directly on the face of the invoice to encourage bulk buying and is never recorded in ledger accounts',
      'Given solely to customers who settle accounts within seven business days',
      'Credited directly to the proprietor’s capital account at year end'
    ],
    correctIndex: 1,
    explanation: 'Trade discount is an allowance off catalogue list prices to encourage bulk orders. It is deducted on the invoice and does not appear in ledger accounts. Cash discount is an incentive for prompt settlement and is recorded in the books.'
  },
  {
    id: 16,
    topic: 'Petty Cash Book',
    question: 'Under the "Imprest System" of petty cash management, the float is:',
    options: [
      'Increased automatically every month by a compounded percentage',
      'Reimbursed periodically with the exact total of expenditures incurred so the float is restored to its agreed initial level',
      'Exclusively disbursed in sovereign gold coins or foreign currency',
      'Transferred to the suspense account whenever receipts are misplaced'
    ],
    correctIndex: 1,
    explanation: 'In the imprest system, the petty cashier begins with a set amount (the float). At regular intervals, after submitting vouchers, the cashier is reimbursed an amount equal to vouchers spent, restoring the cash float to its original fixed sum.'
  },
  {
    id: 17,
    topic: 'The Ledger and Double Entry',
    question: 'The golden rule of the double-entry bookkeeping system dictates that:',
    options: [
      'Every debit entry must have a corresponding credit entry of equal monetary value',
      'All assets must be debited and all revenues must be debited',
      'Cash accounts should always maintain a credit balance at the end of every week',
      'Expenses are credited to the ledger and liabilities are debited'
    ],
    correctIndex: 0,
    explanation: 'Double-entry bookkeeping is founded on the duality principle: for every debit transaction, there must be an equal and opposite credit transaction (Debit the receiver / increase in assets/expenses; Credit the giver / increase in liabilities/capital/revenue).'
  },
  {
    id: 18,
    topic: 'Classification of Accounts',
    question: 'Which of the following accounts is correctly classified as a "Nominal Account"?',
    options: [
      'Machinery Account',
      'Rent and Rates Account',
      'Mallam Danladi (Customer) Account',
      'Bank Current Account'
    ],
    correctIndex: 1,
    explanation: 'Nominal accounts relate to expenses, losses, revenues, and gains (e.g., Rent, Salaries, Sales, Electricity). Machinery is a Real account (tangible property); Customer accounts are Personal accounts.'
  },
  {
    id: 19,
    topic: 'Trial Balance',
    question: 'The primary operational purpose of preparing a Trial Balance is to:',
    options: [
      'Calculate the exact net taxable income due to the inland revenue authority',
      'Check the arithmetical accuracy of the debit and credit postings in the ledger accounts',
      'Prevent all fraudulent cashier misappropriations completely',
      'Disclose the market liquidation value of business goodwill'
    ],
    correctIndex: 1,
    explanation: 'A Trial Balance is a statement of ledger account debit and credit balances drafted on a given date to verify the arithmetical accuracy of double-entry ledger postings.'
  },
  {
    id: 20,
    topic: 'Errors in Accounting',
    question: 'Which of the following accounting errors WILL cause the debit and credit totals of a Trial Balance to disagree?',
    options: [
      'Complete omission of a transaction from both the debit and credit ledgers',
      'Casting error (an arithmetic addition mistake) in the Purchases Day Book',
      'Error of principle (treating a capital expenditure as revenue expenditure)',
      'Compensating errors of equal magnitude on both sides'
    ],
    correctIndex: 1,
    explanation: 'A casting (arithmetical addition) error in a subsidiary day book causes unequal debit and credit postings into the general ledger, causing the Trial Balance totals to disagree and requiring a Suspense Account.'
  },
  {
    id: 21,
    topic: 'Errors in Accounting',
    question: 'An "Error of Principle" is committed when:',
    options: [
      'A transaction is entered into the wrong class of account contrary to fundamental accounting concepts',
      'A debit entry is posted to the wrong person’s personal ledger account',
      'Both debit and credit entries are made for ₦45,000 instead of ₦54,000',
      'The bookkeeper forgets to record a sales invoice entirely'
    ],
    correctIndex: 0,
    explanation: 'An error of principle occurs when an entry breaches fundamental accounting rules—such as debiting repairs to motor vehicle (revenue expense) directly to the Motor Vehicle Asset Account (capital expense).'
  },
  {
    id: 22,
    topic: 'Errors in Accounting',
    question: 'Posting a credit purchase of ₦70,000 from J. Bello to the personal account of K. Bello is an example of an:',
    options: [
      'Error of Omission',
      'Error of Commission',
      'Error of Original Entry',
      'Compensating Error'
    ],
    correctIndex: 1,
    explanation: 'An Error of Commission occurs when a correct entry is posted to the correct side of the ledger but in the wrong personal account of the same category (e.g., J. Bello mistaken for K. Bello).'
  },
  {
    id: 23,
    topic: 'The Suspense Account',
    question: 'A Suspense Account is opened temporarily whenever:',
    options: [
      'A debtor defaults on an unsecured promissory note',
      'The Trial Balance totals fail to agree and the difference must be held until the error is investigated',
      'A partner dies and goodwill has not yet been computed',
      'The board of directors decides to issue unallotted bonus shares'
    ],
    correctIndex: 1,
    explanation: 'When the trial balance fails to balance, the unexplained arithmetical difference is posted to a temporary Suspense Account to allow final accounts to proceed while bookkeepers trace the error.'
  },
  {
    id: 24,
    topic: 'Bank Reconciliation Statement',
    question: 'An "Unpresented Cheque" in a bank reconciliation statement represents a cheque that has been:',
    options: [
      'Received from a customer and paid into the bank but not yet credited by the bank',
      'Drawn and issued by the firm to a creditor, entered in the Cash Book, but not yet presented for payment at the bank',
      'Dishonoured by the bank due to irregular drawer signature',
      'Stolen by an employee before entry into the journal'
    ],
    correctIndex: 1,
    explanation: 'Unpresented cheques are cheques issued by the firm to third parties (creditors) and credited in the cash book, but which have not yet been presented to or cleared by the bank.'
  },
  {
    id: 25,
    topic: 'Bank Reconciliation Statement',
    question: 'An "Uncredited Lodgement" (or deposit in transit) refers to a cheque:',
    options: [
      'Issued to a supplier but delayed in the postal system',
      'Paid into the bank and debited in the Cash Book, but not yet credited on the bank statement on that date',
      'Drawn on an overdrawn current account with negative interest',
      'Sent to the tax board without supporting vouchers'
    ],
    correctIndex: 1,
    explanation: 'Uncredited lodgements are customer cheques deposited into the bank and debited in the firm’s Cash Book, but which the bank has not yet processed and credited to the customer account at statement date.'
  },
  {
    id: 26,
    topic: 'Bank Reconciliation Statement',
    question: 'When updating the Cash Book prior to preparing the final Bank Reconciliation Statement, which item must be entered in the Cash Book?',
    options: [
      'Unpresented cheques',
      'Uncredited deposits',
      'Bank service charges, standing orders, and direct bank dividends',
      'Errors committed exclusively by the bank ledger clerk'
    ],
    correctIndex: 2,
    explanation: 'Items appearing on the bank statement that were unknown to the enterprise (such as bank charges, direct credits, standing orders, dishonoured cheques) must be posted to the Cash Book to update it first.'
  },
  {
    id: 27,
    topic: 'Capital and Revenue Expenditure',
    question: 'Which of the following is classified as "Capital Expenditure"?',
    options: [
      'Repainting factory walls as part of annual maintenance',
      'Legal fees and transportation carriage costs incurred in purchasing and installing a new industrial generator',
      'Purchasing motor fuel and engine lubricants for delivery trucks',
      'Payment of monthly office electricity utility bills'
    ],
    correctIndex: 1,
    explanation: 'Capital expenditure includes all expenditures incurred to acquire, transport, legally convey, and install a non-current asset into operational readiness to generate long-term benefits.'
  },
  {
    id: 28,
    topic: 'Capital and Revenue Expenditure',
    question: 'Treating a revenue expenditure inadvertently as capital expenditure will have the effect of:',
    options: [
      'Understating net profit and understating total assets',
      'Overstating net profit and overstating total assets in the balance sheet',
      'Having no impact on either net profit or working capital',
      'Decreasing proprietor’s closing equity capital'
    ],
    correctIndex: 1,
    explanation: 'Treating an operational expense as a capital asset fails to charge the cost against the profit & loss account, overstating net profit, while improperly capitalizing the asset, overstating total assets.'
  },
  {
    id: 29,
    topic: 'Depreciation of Fixed Assets',
    question: 'Depreciation in accounting is best described as:',
    options: [
      'The systematic allocation of the depreciable amount of a non-current asset over its estimated useful economic life',
      'The physical cash accumulated in a secret vault to purchase replacement machinery',
      'The sudden fall in the resale market price of stock due to changing consumer fashion',
      'The statutory tax deduction approved by the revenue board'
    ],
    correctIndex: 0,
    explanation: 'Depreciation is the measure of the wearing out, consumption, or other reduction in the useful economic life of a fixed asset, allocating its cost across the accounting periods benefiting from its use.'
  },
  {
    id: 30,
    topic: 'Depreciation of Fixed Assets',
    question: 'Under the "Straight-Line Method", annual depreciation charge is calculated as:',
    options: [
      '(Cost - Estimated Scrap / Residual Value) / Estimated Useful Life in Years',
      'Net Book Value × Fixed Percentage Rate',
      'Cost × Number of Units Produced during the financial year',
      'Total Current Assets minus Total Current Liabilities'
    ],
    correctIndex: 0,
    explanation: 'The straight-line method spreads depreciation evenly: Annual Depreciation = (Cost - Estimated Residual Value) / Useful Economic Life in Years.'
  },
  {
    id: 31,
    topic: 'Depreciation of Fixed Assets',
    question: 'A machine costing ₦800,000 has an estimated salvage value of ₦80,000 and an expected useful life of 6 years. Using the straight-line method, annual depreciation is:',
    options: [
      '₦120,000',
      '₦133,333',
      '₦146,667',
      '₦160,000'
    ],
    correctIndex: 0,
    explanation: 'Annual Depreciation = (₦800,000 - ₦80,000) / 6 = ₦720,000 / 6 = ₦120,000 per year.'
  },
  {
    id: 32,
    topic: 'Depreciation of Fixed Assets',
    question: 'Under the "Reducing (Diminishing) Balance Method", the annual depreciation charge:',
    options: [
      'Remains fixed and constant throughout every year of the asset’s life',
      'Decreases progressively in successive accounting years as the asset’s net book value diminishes',
      'Increases progressively year-on-year to match rising maintenance costs',
      'Equals zero until the final year when the asset is salvaged'
    ],
    correctIndex: 1,
    explanation: 'The reducing balance method applies a fixed percentage to the diminishing Net Book Value (Cost less Accumulated Depreciation), resulting in higher charges in early years and lower charges in later years.'
  },
  {
    id: 33,
    topic: 'Bad Debts and Provisions',
    question: 'When a trade debt is definitively determined to be irrecoverable and written off, the correct journal entry is:',
    options: [
      'Debit Bad Debts Account; Credit Customer (Debtor’s) Personal Account',
      'Debit Customer Account; Credit Bad Debts Account',
      'Debit Cash Account; Credit Provision for Doubtful Debts Account',
      'Debit Capital Account; Credit Purchases Account'
    ],
    correctIndex: 0,
    explanation: 'Writing off a bad debt involves: Debit Bad Debts Account (an expense/loss) and Credit Customer/Debtor’s Personal Account (reducing the asset balance to zero).'
  },
  {
    id: 34,
    topic: 'Bad Debts and Provisions',
    question: 'The Provision for Doubtful Debts is shown on the Statement of Financial Position (Balance Sheet) as a:',
    options: [
      'Current liability added to bank overdraft',
      'Deduction from Total Trade Debtors (Receivables) under Current Assets',
      'Capital reserve added to proprietor’s initial investment',
      'Non-current intangible asset alongside goodwill'
    ],
    correctIndex: 1,
    explanation: 'To adhere to the prudence concept, Provision for Doubtful Debts is deducted directly from Trade Debtors (Receivables) in the Current Assets section of the Balance Sheet, stating receivables at estimated net realizable value.'
  },
  {
    id: 35,
    topic: 'Accruals and Prepayments',
    question: 'An "Accrued Expense" at the end of an accounting financial period represents:',
    options: [
      'An expense paid in advance for the upcoming year (Current Asset)',
      'An expense incurred during the current period but not yet paid (Current Liability)',
      'A bad debt recovered from an absconded trade debtor',
      'A dividend warrant issued to ordinary shareholders'
    ],
    correctIndex: 1,
    explanation: 'An accrued expense is a service or benefit enjoyed during the current accounting period for which payment has not yet been disbursed at the balance sheet date; it is treated as a Current Liability.'
  },
  {
    id: 36,
    topic: 'Accruals and Prepayments',
    question: 'On 1st January, a school pays annual insurance premium of ₦360,000 covering 12 months up to 31st December. If accounts close on 30th September, the prepaid insurance is:',
    options: [
      '₦90,000',
      '₦180,000',
      '₦270,000',
      '₦360,000'
    ],
    correctIndex: 0,
    explanation: 'Monthly insurance = ₦360,000 / 12 = ₦30,000. 9 months (Jan to Sept) expired = ₦270,000. The remaining 3 months (Oct, Nov, Dec) are unexpired/prepaid = 3 × ₦30,000 = ₦90,000 (Current Asset).'
  },
  {
    id: 37,
    topic: 'Control Accounts',
    question: 'A Sales Ledger Control Account (Total Debtors Account) is drafted to maintain control over:',
    options: [
      'All trade creditors and suppliers who sell goods on credit',
      'The individual personal accounts of all trade debtors who buy goods on credit',
      'Factory inventory stored inside bonded central warehouses',
      'Petty cash disbursements signed by the administrative bursar'
    ],
    correctIndex: 1,
    explanation: 'The Sales Ledger Control Account is a summary account in the General Ledger that checks the aggregate accuracy of all individual trade debtor balances recorded in the Sales (Debtors) Ledger.'
  },
  {
    id: 38,
    topic: 'Control Accounts',
    question: 'Which of the following items appears on the CREDIT side of a Sales Ledger Control Account?',
    options: [
      'Credit sales for the period',
      'Dishonoured cheques from customers',
      'Cash and cheques received from debtors, and discounts allowed',
      'Interest charged on overdue customer accounts'
    ],
    correctIndex: 2,
    explanation: 'Cash received from debtors, cheques received, discounts allowed, returns inwards, and bad debts written off all reduce total trade receivables and are credited to the Sales Ledger Control Account.'
  },
  {
    id: 39,
    topic: 'Control Accounts',
    question: 'Which of the following appears on the DEBIT side of the Purchases Ledger Control Account (Total Creditors)?',
    options: [
      'Credit purchases of goods for resale',
      'Cash and cheques paid to suppliers, and discounts received',
      'Interest charged by suppliers on overdue balances',
      'Opening credit balance of payables'
    ],
    correctIndex: 1,
    explanation: 'Payments made to creditors (cash/bank), discounts received, and returns outwards reduce the liability owed to creditors and are posted to the Debit side of the Purchases Ledger Control Account.'
  },
  {
    id: 40,
    topic: 'Financial Statements of Sole Trader',
    question: 'The primary purpose of preparing a "Trading Account" is to ascertain the:',
    options: [
      'Gross Profit (or Gross Loss) realized on merchandising trading activities',
      'Net Profit after deducting all administrative and selling overheads',
      'Total liquidity ratio and quick acid-test solvency',
      'Depreciation on factory plant and machinery'
    ],
    correctIndex: 0,
    explanation: 'The Trading Account matches Net Sales against Cost of Goods Sold (Opening Stock + Purchases - Closing Stock) to determine Gross Profit or Gross Loss.'
  },
  {
    id: 41,
    topic: 'Financial Statements of Sole Trader',
    question: 'Given: Opening Stock ₦80,000; Purchases ₦320,000; Carriage Inwards ₦20,000; Closing Stock ₦60,000. What is the Cost of Goods Sold?',
    options: [
      '₦340,000',
      '₦360,000',
      '₦380,000',
      '₦400,000'
    ],
    correctIndex: 1,
    explanation: 'Cost of Goods Sold = Opening Stock (₦80,000) + Purchases (₦320,000) + Carriage Inwards (₦20,000) - Closing Stock (₦60,000) = ₦420,000 - ₦60,000 = ₦360,000.'
  },
  {
    id: 42,
    topic: 'Financial Statements of Sole Trader',
    question: 'Working Capital in accounting is defined mathematically as:',
    options: [
      'Total Assets minus Total Liabilities',
      'Current Assets minus Current Liabilities',
      'Non-Current Assets plus Cash at Bank',
      'Authorised Capital minus Issued Capital'
    ],
    correctIndex: 1,
    explanation: 'Working Capital (Net Current Assets) = Current Assets - Current Liabilities. It measures the short-term liquidity available to run daily business operations.'
  },
  {
    id: 43,
    topic: 'Financial Statements of Sole Trader',
    question: 'Carriage Outwards (transportation cost on goods delivered to customers) is treated in final accounts as:',
    options: [
      'An addition to purchases inside the Trading Account',
      'A selling and distribution operating expense in the Profit and Loss Account',
      'A direct deduction from gross sales revenue',
      'A non-current intangible asset in the Balance Sheet'
    ],
    correctIndex: 1,
    explanation: 'Carriage Inwards (freight on purchases) is charged in the Trading Account. Carriage Outwards is a selling and distribution expense debited to the Profit and Loss Account.'
  },
  {
    id: 44,
    topic: 'Partnership Accounts',
    question: 'In the absence of a written Partnership Deed, the provisions of the Partnership Act 1890 stipulate that:',
    options: [
      'Partners share profits and losses equally, and no partner is entitled to a salary or interest on capital',
      'Profits are distributed in the ratio of contributed capital balances',
      'Senior partners receive a statutory salary of 20% of gross turnover',
      'Partners receive 10% annual interest on capital contributions'
    ],
    correctIndex: 0,
    explanation: 'Under Section 24 of the Partnership Act 1890 (applicable in Nigeria in the absence of an agreement): profits and losses are shared equally; no interest on capital; no partner salaries; and 5% per annum is payable on partner advances/loans beyond capital.'
  },
  {
    id: 45,
    topic: 'Partnership Accounts',
    question: 'The account prepared to demonstrate how the net partnership profit is distributed among partners (salaries, interest on capital, profit shares) is the:',
    options: [
      'Trading Account',
      'Profit and Loss Appropriation Account',
      'Joint Venture Realization Account',
      'Suspense Account'
    ],
    correctIndex: 1,
    explanation: 'The Profit and Loss Appropriation Account shows the allocation of partnership net profit among the partners: crediting interest on drawings and debiting partner salaries, interest on capital, and final profit shares.'
  },
  {
    id: 46,
    topic: 'Partnership Accounts',
    question: 'Under a "Fixed Capital Account" system in a partnership, partner drawings, interest on capital, and profit shares are recorded in the:',
    options: [
      'Partner’s Current Account',
      'Partner’s Capital Account',
      'General Reserve Account',
      'Cash Receipts Journal'
    ],
    correctIndex: 0,
    explanation: 'Under the fixed capital method, the Capital Account records only the permanent capital contributed. Day-to-day transactions (drawings, interest on capital/drawings, salary, profit share) are kept in the Partner’s Current Account.'
  },
  {
    id: 47,
    topic: 'Partnership Accounts',
    question: 'Goodwill in a partnership firm represents:',
    options: [
      'The book value of unused factory stationery at year-end',
      'The intangible value of the business’s established reputation and customer loyalty, enabling it to earn super profits',
      'The legal fee paid to the corporate affairs commission for registration',
      'The total cash balance held in the commercial bank vault'
    ],
    correctIndex: 1,
    explanation: 'Goodwill is an intangible asset representing the value of a business’s reputation, customer base, strategic location, and established brand that enables it to earn profits above normal industry returns.'
  },
  {
    id: 48,
    topic: 'Company Accounts',
    question: 'The maximum nominal amount of share capital that a company is authorized by its memorandum of association to issue to the public is called:',
    options: [
      'Called-up Capital',
      'Paid-up Capital',
      'Authorized (or Nominal / Registered) Capital',
      'Working Capital'
    ],
    correctIndex: 2,
    explanation: 'Authorized Capital (Nominal or Registered Capital) is the total amount of share capital specified in the company’s Memorandum of Association, representing the maximum share value the company is legally authorized to issue.'
  },
  {
    id: 49,
    topic: 'Company Accounts',
    question: 'Which class of corporate security confers ownership rights, voting privileges at AGMs, and variable dividends depending on annual profits?',
    options: [
      'Debentures',
      'Preference Shares',
      'Ordinary Shares (Equity Shares)',
      'Government Treasury Bonds'
    ],
    correctIndex: 2,
    explanation: 'Ordinary shareholders are the equity owners of a company; they possess voting rights at general meetings and bear ultimate financial risk, receiving variable dividends based on profitability.'
  },
  {
    id: 50,
    topic: 'Company Accounts',
    question: 'A debenture issued by a limited liability company represents:',
    options: [
      'An equity ownership share carrying two votes per unit',
      'A long-term loan certificate acknowledging corporate debt and carrying a fixed contractual rate of interest',
      'A short-term trade credit voucher issued to inventory suppliers',
      'A non-redeemable dividend warrant'
    ],
    correctIndex: 1,
    explanation: 'A debenture is a written instrument issued under corporate seal acknowledging a debt. Debenture holders are creditors (not owners) and receive fixed interest regardless of whether profits are earned.'
  },
  {
    id: 51,
    topic: 'Company Accounts',
    question: 'When shares with a nominal par value of ₦1.00 are issued to the public at ₦1.50 each, the extra ₦0.50 per share is credited to the:',
    options: [
      'Share Premium Account',
      'Profit and Loss Account',
      'General Reserve Account',
      'Retained Earnings Account'
    ],
    correctIndex: 0,
    explanation: 'Any consideration received in excess of the par (nominal) value of shares is a capital receipt and must be credited to the Share Premium Account under equity reserves.'
  },
  {
    id: 52,
    topic: 'Incomplete Records (Single Entry)',
    question: 'In the Statement of Affairs method of calculating net profit from incomplete records, the formula used is:',
    options: [
      'Net Profit = Closing Capital + Drawings - Additional Capital Introduced - Opening Capital',
      'Net Profit = Gross Margin + Current Liabilities - Total Depreciation',
      'Net Profit = Closing Assets - Opening Liabilities + Trade Debtors',
      'Net Profit = Opening Capital + Drawings - Closing Capital'
    ],
    correctIndex: 0,
    explanation: 'Under the Statement of Affairs method: Closing Capital + Drawings - Additional Capital - Opening Capital = Net Profit (or Loss) for the period.'
  },
  {
    id: 53,
    topic: 'Financial Ratios and Interpretation',
    question: 'The "Acid-Test (Quick) Ratio" is computed as:',
    options: [
      '(Current Assets - Closing Stock / Inventory) / Current Liabilities',
      'Current Assets / Current Liabilities',
      'Gross Profit / Net Sales Turnover × 100',
      'Net Profit / Capital Employed × 100'
    ],
    correctIndex: 0,
    explanation: 'The Quick (Acid-Test) Ratio measures immediate liquidity by excluding inventory (the least liquid current asset): Quick Ratio = (Current Assets - Inventory) / Current Liabilities. A 1:1 ratio is standard benchmark.'
  },
  {
    id: 54,
    topic: 'Cost and Management Accounting',
    question: 'Prime Cost in cost accounting is the aggregate summation of:',
    options: [
      'Direct Materials + Direct Labour + Direct Expenses',
      'Indirect Factory Overheads + Administrative Expenses',
      'Work in Progress + Finished Goods Inventory',
      'Selling Expenses + Distribution Overhead Costs'
    ],
    correctIndex: 0,
    explanation: 'Prime Cost consists of all direct production costs: Prime Cost = Direct Materials + Direct Labour + Direct Expenses.'
  },
  {
    id: 55,
    topic: 'Cost and Management Accounting',
    question: 'The "Break-Even Point" for a manufacturing business is the output level at which:',
    options: [
      'Total Revenue is exactly equal to Total Costs (Zero Profit, Zero Loss)',
      'Total Variable Costs equal Total Fixed Costs',
      'Marginal Revenue reaches its highest possible level',
      'Gross Profit equals the tax assessment rate'
    ],
    correctIndex: 0,
    explanation: 'The break-even point is where Total Revenue equals Total Cost (TR = TC), resulting in neither profit nor loss. Break-even output = Fixed Costs / Contribution per unit.'
  },
  {
    id: 56,
    topic: 'Accounting Concepts and Conventions',
    question: 'Purchasing an office wastepaper basket for ₦3,000 and charging it immediately to the profit and loss account as an expense rather than capitalizing it over 10 years is justified by the:',
    options: [
      'Materiality Concept',
      'Historical Cost Concept',
      'Duality Concept',
      'Going Concern Concept'
    ],
    correctIndex: 0,
    explanation: 'The Materiality Concept states that items of insignificant monetary value need not strictly adhere to complex accounting rules if omitting them would not mislead financial statement users.'
  },
  {
    id: 57,
    topic: 'The Ledger and Double Entry',
    question: 'What is the double entry to record cash withdrawn from the business bank account by the proprietor for personal domestic family use?',
    options: [
      'Debit Drawings Account; Credit Bank Account',
      'Debit Bank Account; Credit Drawings Account',
      'Debit Capital Account; Credit Cash Account',
      'Debit Personal Expenses Account; Credit Sales Account'
    ],
    correctIndex: 0,
    explanation: 'Proprietor withdrawals for personal use represent drawings: Debit Drawings Account (reducing owner’s equity) and Credit Bank Account (reducing asset).'
  },
  {
    id: 58,
    topic: 'Financial Statements of Sole Trader',
    question: 'In the Statement of Financial Position, "Current Assets" are traditionally arranged in order of liquidity as:',
    options: [
      'Stock (Inventory), Debtors (Receivables), Bank, Cash in hand',
      'Cash in hand, Bank, Debtors, Stock',
      'Debtors, Stock, Cash, Machinery',
      'Premises, Equipment, Motor Vehicles, Inventory'
    ],
    correctIndex: 0,
    explanation: 'In order of increasing liquidity: Stock (least liquid), Debtors/Receivables, Bank balance, and Cash in hand (most liquid). (If listed in order of permanence, the order is reversed).'
  },
  {
    id: 59,
    topic: 'Errors in Accounting',
    question: 'A credit sale of ₦85,000 to Musa was recorded in both the Sales Journal and Musa’s account as ₦58,000. This is an example of an:',
    options: [
      'Error of Original Entry',
      'Error of Principle',
      'Error of Commission',
      'Compensating Error'
    ],
    correctIndex: 0,
    explanation: 'An Error of Original Entry occurs when an incorrect figure is written into the book of original entry and then posted faithfully to both debit and credit ledgers; the trial balance will still balance.'
  },
  {
    id: 60,
    topic: 'Bank Reconciliation Statement',
    question: 'A customer pays ₦50,000 directly into your business bank account via online transfer without notifying you. When discovered on the bank statement, you should:',
    options: [
      'Debit Bank in the Cash Book; Credit the Customer’s Account',
      'Credit Bank in the Cash Book; Debit Sales Account',
      'Deduct ₦50,000 from the Bank Reconciliation Statement without adjusting the Cash Book',
      'Open a Suspense Account to hold the transfer indefinitely'
    ],
    correctIndex: 0,
    explanation: 'A direct credit from a customer increases the bank balance: Debit Cash Book (Bank column) to record the receipt, and Credit the Customer’s Account to reduce their debt balance.'
  },
  {
    id: 61,
    topic: 'Manufacturing Accounts',
    question: 'In a Manufacturing Account, factory overheads include all of the following EXCEPT:',
    options: [
      'Factory supervisor’s salary',
      'Depreciation of factory plant and machinery',
      'Carriage outwards on sales to retail customers',
      'Factory electricity and power utilities'
    ],
    correctIndex: 2,
    explanation: 'Factory overheads are indirect production costs within the factory. Carriage Outwards is a selling and distribution expense, charged to the Profit and Loss Account, not the Manufacturing Account.'
  },
  {
    id: 62,
    topic: 'Accounting Concepts and Conventions',
    question: 'The practice of applying the same accounting methods and valuation treatments consistently from one accounting period to the next is governed by the:',
    options: [
      'Consistency Convention',
      'Accruals Concept',
      'Dual Aspect Concept',
      'Historical Cost Concept'
    ],
    correctIndex: 0,
    explanation: 'The Consistency Convention requires that accounting policies, methods, and practices (such as inventory valuation or depreciation method) remain uniform across successive financial years to enable meaningful comparison.'
  }
];
