import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import QuestionDetail from './QuestionDetail';
import * as XLSX from 'xlsx';
import './App.css';

const questions = [
  {
    id: 1,
    question: "Can I take benefit of presumptive scheme in LLP or company?",
    answers: {
      A: "Consequences of Default in Payment of Advance Tax If an assessee fails to pay advance tax, they shall be liable to pay interest under Section 234B for default in payment of advance tax and Section 234C for deferment of payment of advance tax. The interest under Section 234B is levied if the advance tax paid by the due date of filing return of income is less than 90% of the assessed tax. The interest under Section 234C is levied if the advance tax paid in an instalment is less than the prescribed percentage. The prescribed percentages for payment of advance tax in instalments are as follows: Due date for payment of advance tax - Advance tax to be payable: On or before June 15 of the previous year - At least 15% of advance tax. On or before September 15 of the previous year - At least 45% of advance tax. On or before December 15 of the previous year - At least 75% of advance tax. On or before March 15 of the previous year - 100% of advance tax. The rate of interest under Section 234C is 1% per month or part thereof. Assumptions: The user is an Indian resident. The user has a tax liability of Rs. 10,000 or more. Clarifications: The user should consult a tax professional to determine the exact amount of interest payable under Section 234B and Section 234C. The user should ensure that they pay the advance tax in accordance with the prescribed due dates to avoid interest liability. Note: The above response is based on the provided context and is intended to provide general information only. It is not intended to be a substitute for professional tax advice. Users are advised to consult a tax professional for specific guidance on their individual tax situations. Primary Parent Topics: Interest and Fees - Interest for deferment of Advance Tax, Advance Tax - Advance Tax. Disclaimer: The information contained in this communication is intended solely for the use of the individual or entity to whom it is addressed and others authorized to receive it. It may contain confidential or legally privileged information. If you are not the intended recipient, you are hereby notified that any disclosure, copying, distribution, or taking any action in reliance on the contents of this information is strictly prohibited and may be unlawful. If you have received this communication in error, please notify us immediately by responding to this email and then delete it from your system. The firm is neither liable for the proper and complete transmission of the information contained in this communication nor for any delay in its receipt.",
      B: "",
      C: "Overview of Presumptive Taxation Presumptive taxation in India is designed to simplify tax compliance for small taxpayers by allowing them to declare income at a prescribed rate in lieu of maintaining detailed records. This scheme is available under different sections of the Income Tax Act: Section 44AD: For small businesses. Section 44ADA: For specified professionals. Section 44AE: For taxpayers engaged in the business of plying, hiring, or leasing goods carriages. Eligibility Under Sections 44AD & 44ADA Section 44AD: This scheme is principally available to resident individuals, Hindu Undivided Families (HUFs), and partnership firms. The eligibility specifically excludes Limited Liability Partnership (LLP) firms. As stated in the documents: Resident Partnership Firm (not Limited Liability Partnership Firm) [1] There is no explicit indication in these sections that companies can opt for the scheme for business income. Section 44ADA: This scheme, meant for specified professionals, is available only to resident individuals and partnership firms (other than LLPs). The Finance Act, 2021 has amended ... benefit of section 44ADA is eligible only ... Partnership firm (other than LLP) [1] Thus, LLPs are explicitly excluded, and companies are not covered under this provision. Eligibility Under Section 44AE for Goods Carriage Business Section 44AE applies to taxpayers engaged in the business of plying, hiring, or leasing goods carriages. This section is broader in that it includes every person such as individuals, HUFs, partnership firms, and companies, provided the business meets the stipulated criteria (e.g., not owning more than 10 goods vehicles at any time during the year). The presumptive taxation scheme of section 44AE ... is applicable to every person (i.e., an individual, HUF, firm, company, etc.) [1] There is no similar provision available for LLPs under Section 44AE, which reinforces that LLPs remain ineligible unless covered by another specific provision. Filing Implications ITR-4 (SUGAM) is designed for those opting for presumptive taxation (individuals, HUFs, and partnership firms excluding LLPs). ITR – 4 (SUGAM) ... Available to individuals, Hindu Undivided Family, or partnership firms opting for the presumptive taxation scheme [2] LLPs and companies typically file returns under ITR-5 or ITR-6, which do not incorporate presumptive taxation benefits -- except, as noted, where a company falls under Section 44AE. Summary Table Entity Type - Section 44AD/44ADA Eligibility - Section 44AE Eligibility LLP - Excluded (explicitly mentioned as not LLP in the provisions) [1][1] - No specific provision for LLPs under 44AE Company - Generally not eligible (no explicit provision for companies) - Eligible if engaged in the goods carriage business and meeting conditions [1] Final Answer For LLPs: LLPs cannot take advantage of the presumptive taxation schemes under Sections 44AD and 44ADA as they are explicitly excluded. For Companies: Companies are generally not eligible to opt for the presumptive taxation scheme under Sections 44AD and 44ADA. However, if a company is involved in the business of plying, hiring, or leasing goods carriages and meets all requirements under Section 44AE, it may benefit from the presumptive taxation scheme in that specific context. Given the current context and provided documents, this is the comprehensive interpretation of the eligibility issues related to presumptive taxation for LLPs and companies in India as of today's date, 2025-03-05.",
      D: "Interest rate under Sec 234C is 1% per month",
      E: "Pay advance tax on time to avoid interest",
    },
  },
  {
    id: 2,
    question: "What happens if I don’t pay advance tax?",
    answers: {
      A: "Consequences of Default in Payment of Advance Tax If an assessee fails to pay advance tax, they shall be liable to pay interest under Section 234B for default in payment of advance tax and Section 234C for deferment of payment of advance tax. The interest under Section 234B is levied if the advance tax paid by the due date of filing return of income is less than 90% of the assessed tax. The interest under Section 234C is levied if the advance tax paid in an instalment is less than the prescribed percentage. The prescribed percentages for payment of advance tax in instalments are as follows: Due date for payment of advance tax - Advance tax to be payable: On or before June 15 of the previous year - At least 15% of advance tax. On or before September 15 of the previous year - At least 45% of advance tax. On or before December 15 of the previous year - At least 75% of advance tax. On or before March 15 of the previous year - 100% of advance tax. The rate of interest under Section 234C is 1% per month or part thereof. Assumptions: The user is an Indian resident. The user has a tax liability of Rs. 10,000 or more. Clarifications: The user should consult a tax professional to determine the exact amount of interest payable under Section 234B and Section 234C. The user should ensure that they pay the advance tax in accordance with the prescribed due dates to avoid interest liability. Note: The above response is based on the provided context and is intended to provide general information only. It is not intended to be a substitute for professional tax advice. Users are advised to consult a tax professional for specific guidance on their individual tax situations. Primary Parent Topics: Interest and Fees - Interest for deferment of Advance Tax, Advance Tax - Advance Tax. Disclaimer: The information contained in this communication is intended solely for the use of the individual or entity to whom it is addressed and others authorized to receive it. It may contain confidential or legally privileged information. If you are not the intended recipient, you are hereby notified that any disclosure, copying, distribution, or taking any action in reliance on the contents of this information is strictly prohibited and may be unlawful. If you have received this communication in error, please notify us immediately by responding to this email and then delete it from your system. The firm is neither liable for the proper and complete transmission of the information contained in this communication nor for any delay in its receipt.",
      B: "Interest under Section 234A, B, and C",
      C: "Additional 10% of tax liability",
      D: "Penalties can be waived in some cases",
      E: "No penalty if paid within 6 months",
    },
  },
];

const App = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(questions[0]);
  const [selectedAnswerKey, setSelectedAnswerKey] = useState('A');
  const [ratings, setRatings] = useState({});

  const handleSelectQuestion = (question) => {
    setSelectedQuestion(question);
    setSelectedAnswerKey('A'); // Reset to the first answer when switching questions
    setRatings({});
  };

  const handleSelectAnswer = (answerKey) => {
    setSelectedAnswerKey(answerKey);
  };

  const handleRatingChange = (param, value) => {
    setRatings((prev) => ({
      ...prev,
      [param]: value,
    }));
  };

  const saveToExcel = () => {
    const data = Object.entries(ratings).map(([param, value]) => ({
      Question: selectedQuestion.question,
      Answer: selectedQuestion.answers[selectedAnswerKey],
      Parameter: param,
      Rating: value,
    }));

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Ratings');
    XLSX.writeFile(wb, 'ratings.xlsx');
  };

  return (
    <div className="app">
      <Sidebar questions={questions} onSelectQuestion={handleSelectQuestion} />
      <div className="content">
        <TopNav selectedAnswerKey={selectedAnswerKey} onSelectAnswer={handleSelectAnswer} />
        <QuestionDetail
          selectedQuestion={selectedQuestion}
          selectedAnswerKey={selectedAnswerKey}
          ratings={ratings}
          onRatingChange={handleRatingChange}
          onSaveToExcel={saveToExcel}
        />
      </div>
    </div>
  );
};

export default App;
