import React, { useState,useEffect} from 'react';
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import QuestionDetail from './QuestionDetail';
import * as XLSX from 'xlsx';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext';
import Login from './Login';
import Signup from './Signup';
import Feedback from './Feedback';


const questions = [
  {
    id: 1,
    question: "Can I take benefit of presumptive scheme in LLP or company?",
    answers: {
      A: `
      Eligibility for Presumptive Scheme under Section 44ADA The presumptive
scheme under Section 44ADA is applicable to resident assessees who are
individuals, Hindu Undivided Families (HUF), or partnership firms, but it
expressly excludes Limited Liability Partnerships (LLPs).
Ineligible Entities LLPs and companies are not eligible to take advantage of the
presumptive scheme under Section 44ADA.
Eligible Entities The following entities are eligible for the presumptive scheme
under Section 44ADA:
1. Individuals
2. Hindu Undivided Families (HUF)
3. Partnership firms (excluding LLPs)
This information is based on the provided context, which states that a resident
Individual or Partnership Firm (excluding LLP) can claim the presumptive tax
scheme under Section 44ADA.
Primary Parent Topics:
1. Business or Profession Presumptive Scheme for Professionals under
Section 44ADA
1. Business or Profession Presumptive Scheme for Businesses under
Section 44AD`,
      B:  `
      Legal Research Memorandum
      
      Issue
      The key issue to be determined is whether a Limited Liability Partnership (LLP) or a company in India can claim the benefits of the presumptive taxation scheme under the Income Tax Act.
      
      Rule
      Based on the analysis of the relevant case laws and web sources, the following legal principles and rules can be established:
      
      1. Treatment of LLPs under the Income Tax Act:
      • Under the Income Tax Act, a Limited Liability Partnership (LLP) is treated as a separate assessable legal entity, similar to a partnership firm. The benefits and deductions available to a firm are also available to an LLP. (Hotel Centre Point, Shillong vs. ITO, Ward-1 & TPS, Shillong, 2024)
      • The CBDT has clarified that LLPs and general partnerships are accorded the same tax treatment under the Income Tax Act. (Circular No 5 of 2010, CBDT, 2010)
      
      2. Eligibility for Presumptive Taxation Schemes:
      • Section 44AD of the Income Tax Act, which provides a presumptive taxation scheme for small businesses, does not apply to LLPs. It is only applicable to individuals, Hindu Undivided Families (HUFs), and partnership firms that are not LLPs. (Section 44AD, Income Tax Act)
      • Section 44ADA of the Income Tax Act, which provides a presumptive taxation scheme for professionals, also does not apply to LLPs. It is explicitly mentioned that this section applies to individuals, HUFs, and partnership firms, but not LLPs. (Section 44ADA, Income Tax Act)
      • The reason for excluding LLPs from these presumptive taxation schemes is that LLPs are already required to maintain books of accounts under the LLP Act. (Section 44AD and 44ADA, Income Tax Act)
      • Companies are also not eligible for these presumptive taxation schemes, as they are not mentioned in the eligible categories for either Section 44AD or 44ADA. (Sections 44AD and 44ADA, Income Tax Act)
      
      Application
      Based on the analysis of the relevant case laws and web sources, the following can be concluded:
      
      1. LLPs and Presumptive Taxation Schemes:
      • LLPs are not eligible to claim the benefits of the presumptive taxation schemes under Sections 44AD and 44ADA of the Income Tax Act.
      • The exclusion of LLPs from these schemes is due to the requirement for LLPs to maintain books of accounts under the LLP Act, which is the primary reason for the presumptive taxation schemes.
      
      2. Companies and Presumptive Taxation Schemes:
      • Companies are also not eligible to claim the benefits of the presumptive taxation schemes under Sections 44AD and 44ADA of the Income Tax Act.
      • Companies are not mentioned as eligible entities for these schemes, which are primarily designed for smaller business entities like individuals, HUFs, and regular partnership firms.
      
      Conclusion
      In conclusion, based on the analysis of the relevant case laws and web sources, a Limited Liability Partnership (LLP) or a company in India cannot claim the benefits of the presumptive taxation scheme under the Income Tax Act.
      
      The key reasons are:
      1. LLPs are excluded from the eligibility criteria for the presumptive taxation schemes under Sections 44AD and 44ADA of the Income Tax Act, as they are required to maintain books of accounts under the LLP Act.
      2. Companies are also not eligible for these presumptive taxation schemes, as they are not mentioned as eligible entities in the relevant provisions of the Income Tax Act.
      
      Recommendations
      1. It is recommended that LLPs and companies in India explore other available tax deductions and benefits under the Income Tax Act, as they may be eligible for those based on their specific circumstances.
      2. It is advisable for LLPs and companies to consult with a licensed tax professional or advocate to ensure compliance with the relevant provisions of the Income Tax Act and to explore all available tax-saving opportunities.
      
      Cases Referred
      • Herbert Smith Free LLP vs. DCIT Circle 2(1)(1) New Delhi (ITAT, 2024)
      • Hotel Centre Point, Shillong vs. ITO, Ward-1 & TPS, Shillong (ITAT, 2024)
      • General Motors Company USA vs. ACIT, Circle International-taxation-1(3)(1), New Delhi (ITAT, 2024)
      • Wild West Domains, LLC vs. Circle-3(1)(1), Int. Taxation NewDelhi (ITAT, 2024)
      • Linklaters LLP vs. Income Tax Officer, International Taxation Ward 1(1)(2), Mumbai (ITAT, 2010)
      • Parmeshwar Enclaves (P) Ltd. vs. ADIT, CPC, Bangalore (ITAT, 2022)
      • Vidya Investment and Trading Co. P. Ltd. vs. Union of India (HC, 2014)
      • M/s. Nedlloyd Bv vs. DDIT (I.T)-2(1) (ITAT, 2013)
      • M/s. Maersk BV (formerly known as Nedlloyd BV) vs. Dy. Director of Income-tax International Taxation 2(1), Mumbai (HC, 2013)
      • M/s. Prestress (India) P. Ltd. vs. ITO - 1(2)(2) (ITAT, 2013)
      • Circular No 5 of 2010 (CBDT, 2010)
      • Rao Bahadur Ravulu Subba Rao v. Commissioner of Income Tax (SC, 1956)
      
      Disclaimer
      • This legal analysis is provided for informational purposes only and should not be considered as a substitute for professional legal advice. The information presented may not be up-to-date or applicable to your specific situation.
      • It is recommended to consult with a licensed tax professional or advocate to obtain personalized legal advice and to ensure compliance with the relevant laws and regulations.
      • The analysis is based on the information provided in the sections, and the accuracy of the information cannot be guaranteed.
            `,
      C: "Overview of Presumptive Taxation Presumptive taxation in India is designed to simplify tax compliance for small taxpayers by allowing them to declare income at a prescribed rate in lieu of maintaining detailed records. This scheme is available under different sections of the Income Tax Act: Section 44AD: For small businesses. Section 44ADA: For specified professionals. Section 44AE: For taxpayers engaged in the business of plying, hiring, or leasing goods carriages. Eligibility Under Sections 44AD & 44ADA Section 44AD: This scheme is principally available to resident individuals, Hindu Undivided Families (HUFs), and partnership firms. The eligibility specifically excludes Limited Liability Partnership (LLP) firms. As stated in the documents: Resident Partnership Firm (not Limited Liability Partnership Firm) [1] There is no explicit indication in these sections that companies can opt for the scheme for business income. Section 44ADA: This scheme, meant for specified professionals, is available only to resident individuals and partnership firms (other than LLPs). The Finance Act, 2021 has amended ... benefit of section 44ADA is eligible only ... Partnership firm (other than LLP) [1] Thus, LLPs are explicitly excluded, and companies are not covered under this provision. Eligibility Under Section 44AE for Goods Carriage Business Section 44AE applies to taxpayers engaged in the business of plying, hiring, or leasing goods carriages. This section is broader in that it includes every person such as individuals, HUFs, partnership firms, and companies, provided the business meets the stipulated criteria (e.g., not owning more than 10 goods vehicles at any time during the year). The presumptive taxation scheme of section 44AE ... is applicable to every person (i.e., an individual, HUF, firm, company, etc.) [1] There is no similar provision available for LLPs under Section 44AE, which reinforces that LLPs remain ineligible unless covered by another specific provision. Filing Implications ITR-4 (SUGAM) is designed for those opting for presumptive taxation (individuals, HUFs, and partnership firms excluding LLPs). ITR – 4 (SUGAM) ... Available to individuals, Hindu Undivided Family, or partnership firms opting for the presumptive taxation scheme [2] LLPs and companies typically file returns under ITR-5 or ITR-6, which do not incorporate presumptive taxation benefits -- except, as noted, where a company falls under Section 44AE. Summary Table Entity Type - Section 44AD/44ADA Eligibility - Section 44AE Eligibility LLP - Excluded (explicitly mentioned as not LLP in the provisions) [1][1] - No specific provision for LLPs under 44AE Company - Generally not eligible (no explicit provision for companies) - Eligible if engaged in the goods carriage business and meeting conditions [1] Final Answer For LLPs: LLPs cannot take advantage of the presumptive taxation schemes under Sections 44AD and 44ADA as they are explicitly excluded. For Companies: Companies are generally not eligible to opt for the presumptive taxation scheme under Sections 44AD and 44ADA. However, if a company is involved in the business of plying, hiring, or leasing goods carriages and meets all requirements under Section 44AE, it may benefit from the presumptive taxation scheme in that specific context. Given the current context and provided documents, this is the comprehensive interpretation of the eligibility issues related to presumptive taxation for LLPs and companies in India as of today's date, 2025-03-05.",
      D: `According to the provisions of section 44ADA, the presumptive scheme is applicable to resident assessees who are individuals, Hindu Undivided Families (HUF), or partnership firms, but it expressly excludes Limited Liability Partnerships (LLPs). The Finance Act, 2021 further clarified that the provisions of section 44ADA apply to an assessee being an individual, HUF, or partnership firm, not being an LLP.

      Therefore, LLPs and companies are not eligible to take advantage of the presumptive scheme under section 44ADA.
      
      In summary: 1. The presumptive scheme under section 44ADA is applicable to: - Individuals - Hindu Undivided Families (HUF) - Partnership firms (excluding LLPs)
      
      LLPs and companies are explicitly excluded from availing the benefits of this presumptive scheme.
      Reference: [1]1 Sampath Volume 5 (13th Edition)
      
      `,
      E: `
      The query pertains to the applicability of the presumptive taxation scheme for Limited Liability Partnerships (LLPs) and companies under Indian Income Tax laws. Presumptive taxation schemes are designed to simplify the tax compliance process for small taxpayers by allowing them to declare income at a prescribed rate of turnover or gross receipts, thereby reducing the burden of maintaining detailed books of accounts. However, the eligibility criteria for these schemes are specific and exclude certain entities. 
      
      Applicable Sections and Rules 
      
      Section 44AD of the Income Tax Act, 1961: This section provides for a presumptive taxation scheme for eligible businesses. It allows eligible assessees to declare income at 8% (or 6% for digital transactions) of the total turnover or gross receipts, provided they do not exceed INR 2 crore (or INR 3 crore in specified cases) [2]. 
      
      Eligible Assessees: As per the provisions, only individuals, Hindu Undivided Families (HUFs), and partnership firms (excluding LLPs) that are residents in India can opt for this scheme [1][2]. 
      
      Exclusions: LLPs and companies are explicitly excluded from availing the benefits of Section 44AD [1]. 
      
      Section 44ADA: This section is applicable to professionals with gross receipts not exceeding INR 50 lakh. Similar to Section 44AD, it allows for presumptive income declaration at 50% of gross receipts. However, LLPs are also excluded from this scheme [3]. 
      
      Section 44AE: This section applies to businesses involved in plying, hiring, or leasing goods carriages. It allows for presumptive income based on the number of vehicles owned. This section does not specifically exclude LLPs or companies, but the nature of the business must align with the section's requirements. 
      Notifications, Circulars, Guidelines, Instructions 
      
      CBDT Circulars: The Central Board of Direct Taxes (CBDT) has issued clarifications that reinforce the exclusion of LLPs and companies from the presumptive taxation schemes under Sections 44AD and 44ADA. These circulars emphasize the intent to simplify tax compliance for small individual and partnership businesses, not for LLPs or corporate entities. 
      Case Laws and Judicial Precedents 
      
      There are no significant case laws that challenge the exclusion of LLPs and companies from the presumptive taxation schemes under Sections 44AD and 44ADA. The legislative intent and statutory language are clear in excluding these entities. 
      
      Practical Implications 
      
      Tax Compliance: LLPs and companies must maintain detailed books of accounts and undergo audits as per the provisions of the Income Tax Act, unlike eligible assessees under the presumptive taxation scheme. 
      
      Tax Planning: Businesses structured as LLPs or companies need to explore other avenues for tax efficiency, as they cannot benefit from the simplified presumptive taxation schemes. 
      
      Examples for Clarity 
      
      Example 1: A resident individual running a small retail business with a turnover of INR 1.5 crore can opt for Section 44AD and declare income at 8% of turnover, simplifying tax compliance. 
      
      Example 2: An LLP engaged in the same business with a similar turnover cannot opt for Section 44AD and must maintain detailed accounts and undergo an audit if required. 
      
      Conclusion and Recommendations 
      
      Key Points: 
      
      LLPs and companies are not eligible for presumptive taxation under Sections 44AD and 44ADA. 
      
      These schemes are intended for small individual and partnership businesses to simplify tax compliance. 
      
      Recommendations: 
      
      LLPs and companies should ensure compliance with regular tax provisions and explore other tax planning strategies. 
      
      Stay updated with any legislative changes or notifications that may impact eligibility for presumptive taxation. 
      
      References 
      
      Sections: 44AD, 44ADA, 44AE of the Income Tax Act, 1961 
      
      Circulars: CBDT guidelines on presumptive taxation 
      
      `,
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

  const { user } = useAuth();  // Get user from AuthContext

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
    // Assuming you have the following values:
    const userId = user.id; // User ID from auth context
    const questionId = selectedQuestion.id; // Question ID (e.g., 1)
    const answerId = selectedAnswerKey; // Answer ID (A, B, C, etc.)
    const correctness = getCorrectness(selectedQuestion, selectedAnswerKey); // Function to check correctness (true/false)
    const accuracy = getAccuracy(selectedQuestion, selectedAnswerKey); // Function to get accuracy value (number)
    const avgRating = calculateAvgRating(ratings); // Function to calculate average rating from the `ratings` object

    // Create data array with additional fields
    const data = Object.entries(ratings).map(([param, value]) => ({
      userId: userId,
      questionId: questionId,
      answerId: answerId,
      correctness: correctness,
      accuracy: accuracy,
      avgRating: avgRating,
      Parameter: param,
      Rating: value,
    }));

    // Create Excel worksheet
    const ws = XLSX.utils.json_to_sheet(data);

    // Create a new Excel workbook
    const wb = XLSX.utils.book_new();

    // Append the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Ratings');

    // Write the file to the user's system
    XLSX.writeFile(wb, 'ratings.xlsx');
  };

  // Helper functions to get correctness, accuracy, and avgRating
  const getCorrectness = (question, answerKey) => {
    // Logic to determine if the answer is correct
    return question.correctAnswer === answerKey; // Assuming question has a `correctAnswer` field
  };

  const getAccuracy = (question, answerKey) => {
    // Logic to calculate accuracy (can be based on some factor or user-specific data)
    return Math.random() * 100; // Placeholder for accuracy calculation, modify based on your requirements
  };

  const calculateAvgRating = (ratings) => {
    const totalRating = Object.values(ratings).reduce((sum, rating) => sum + rating, 0);
    return totalRating / Object.values(ratings).length;
  };




  return (
    <Router>
    <div className="app">
      <Routes>
        {/* Route for Login page */}
        <Route path="/" element={<Login />} />

        {/* Route for Signup page */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/feedback" element={<Feedback />} />

        {/* Default Route for Home page */}
        <Route
          path="/login"
          element={
            user ? (
              <>
                {/* Sidebar for displaying questions */}
                <Sidebar questions={questions} onSelectQuestion={handleSelectQuestion} />

                {/* Content area */}
                <div className="content">
                  {/* Top navigation */}
                  <TopNav selectedAnswerKey={selectedAnswerKey} onSelectAnswer={handleSelectAnswer} />

                  {/* Question detail section */}
                  <QuestionDetail
                    selectedQuestion={selectedQuestion}
                    selectedAnswerKey={selectedAnswerKey}
                    ratings={ratings}
                    onRatingChange={handleRatingChange}
                    onSaveToExcel={saveToExcel}
                  />
                </div>
              </>
            ) : (
              // If user is not logged in, show login/signup links
             <Login />
            )
          }
        />
      </Routes>
    </div>
  </Router>
);
};

export default () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);