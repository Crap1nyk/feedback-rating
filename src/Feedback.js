import React, { useState,useEffect} from 'react';
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import QuestionDetail from './QuestionDetail';
import * as XLSX from 'xlsx';
import './App.css';
import { auth } from './firebase';




const questions = [
  {
    id: 1,
    question: "Can I take benefit of presumptive scheme in LLP or company?",

    answers: {
      A: `
## **Eligibility for Presumptive Scheme under Section 44ADA**

The presumptive scheme under **Section 44ADA** is applicable to resident assessees who are:
- **Individuals**
- **Hindu Undivided Families (HUF)**
- **Partnership firms** (but **expressly excludes** Limited Liability Partnerships (LLPs)).

---

## **Ineligible Entities**
- **LLPs** and **companies** are **not eligible** to take advantage of the presumptive scheme under **Section 44ADA**.

---

## **Eligible Entities**

The following entities **are eligible** for the presumptive scheme under **Section 44ADA**:
1. **Individuals**
2. **Hindu Undivided Families (HUF)**
3. **Partnership firms** (excluding LLPs)

---

## **Additional Information**

This information is based on the provided context, which states that a **resident Individual** or **Partnership Firm** (excluding LLP) can claim the presumptive tax scheme under **Section 44ADA**.

---

## **Primary Parent Topics:**

1. **Business or Profession Presumptive Scheme for Professionals under Section 44ADA**
2. **Business or Profession Presumptive Scheme for Businesses under Section 44AD**
`,

      B: `Legal Research Memorandum

Issue
The key issue to be determined is whether a Limited Liability Partnership (LLP) or a company in India can claim the benefits of the presumptive taxation scheme under the Income Tax Act.

Rule
Based on the analysis of the relevant case laws and web sources, the following legal principles and rules can be established:

1. Treatment of LLPs under the Income Tax Act:
• Under the Income Tax Act, a Limited Liability Partnership (LLP) is treated as a separate assessable legal entity, similar to a partnership firm. The benefits and deductions available to a firm are also available to an LLP. (Hotel Centre Point, Shillong vs. ITO, Ward-1 & TPS, Shillong, 2024)
• The CBDT has clarified that LLPs and general partnerships are accorded the same tax treatment under the Income Tax Act. (Circular No 5 of 2010, CBDT, 2010)

2. Eligibility for Presumptive Taxation Schemes:
• Section 44AD of the Income Tax Act does not apply to LLPs. It is only applicable to individuals, HUFs, and partnership firms that are not LLPs.
• Section 44ADA also does not apply to LLPs. It explicitly mentions individuals, HUFs, and partnership firms, but not LLPs.
• The reason for excluding LLPs from these presumptive taxation schemes is that LLPs are required to maintain books of accounts under the LLP Act.
• Companies are also not eligible for these presumptive taxation schemes, as they are not mentioned in the eligible categories for either Section 44AD or 44ADA.

Application
Based on the above, the following can be concluded:
• LLPs are not eligible to claim the benefits of the presumptive taxation schemes under Sections 44AD and 44ADA.
• Companies are also not eligible to claim the benefits of the presumptive taxation schemes under Sections 44AD and 44ADA.

Conclusion
A Limited Liability Partnership (LLP) or a company in India cannot claim the benefits of the presumptive taxation scheme under the Income Tax Act.

Recommendations
• LLPs and companies in India should explore other available tax deductions and benefits under the Income Tax Act.
• Consult with a licensed tax professional or advocate to ensure compliance and explore tax-saving opportunities.

Cases Referred
• Herbert Smith Free LLP vs. DCIT Circle 2(1)(1) New Delhi (ITAT, 2024)
• Hotel Centre Point, Shillong vs. ITO, Ward-1 & TPS, Shillong (ITAT, 2024)
• Circular No 5 of 2010 (CBDT, 2010)

Disclaimer
This legal analysis is provided for informational purposes only and should not be considered as a substitute for professional legal advice.`,

      C: `Overview of Presumptive Taxation
Presumptive taxation in India simplifies tax compliance for small taxpayers by allowing them to declare income at a prescribed rate.

Sections:
• Section 44AD: For small businesses (Individuals, HUFs, Partnership firms excluding LLPs).
• Section 44ADA: For specified professionals (Individuals and Partnership firms excluding LLPs).
• Section 44AE: For taxpayers engaged in the business of plying, hiring, or leasing goods carriages (Individuals, HUFs, Partnership firms, and Companies).

Eligibility
• LLPs are explicitly excluded from Sections 44AD and 44ADA.
• Companies are not mentioned as eligible entities under 44AD or 44ADA but are eligible under 44AE if they meet the conditions.

Filing Implications
• ITR-4 (SUGAM) for individuals, HUFs, and partnership firms (excluding LLPs).
• LLPs and companies typically file ITR-5 or ITR-6.

Summary Table:
| Entity Type | Section 44AD/44ADA Eligibility | Section 44AE Eligibility |
|-------------|-------------------------------|-------------------------|
| LLP         | Excluded                      | Not specified           |
| Company     | Not eligible                  | Eligible under 44AE     |

Final Answer:
• LLPs cannot take advantage of the presumptive schemes under Sections 44AD and 44ADA.
• Companies are not eligible for 44AD and 44ADA but may benefit under 44AE.`,

      D: `According to section 44ADA, the presumptive scheme is applicable to resident assessees who are individuals, HUFs, or partnership firms, excluding LLPs.

The Finance Act, 2021 clarified that 44ADA applies only to:
• Individuals
• Hindu Undivided Families (HUF)
• Partnership firms (excluding LLPs)

LLPs and companies are explicitly excluded from availing benefits under section 44ADA.

Reference:
• Sampath Volume 5 (13th Edition)`,

      E: `The query pertains to presumptive taxation schemes for LLPs and companies under Indian Income Tax laws.

Applicable Sections:
• Section 44AD: Available to Individuals, HUFs, Partnership firms (excluding LLPs). Excludes LLPs and companies.
• Section 44ADA: Similar to 44AD, excludes LLPs and companies.
• Section 44AE: Applies to businesses engaged in goods carriages; includes individuals, HUFs, firms, and companies (LLPs eligibility not clearly defined).

CBDT Clarifications:
• Reinforce exclusion of LLPs and companies from Sections 44AD and 44ADA.

Practical Implications:
• LLPs and companies must maintain detailed books and undergo audits.
• They need to explore other tax planning strategies.

Examples:
1. A resident individual can opt for 44AD for a turnover of INR 1.5 crore.
2. An LLP in the same business must maintain books and cannot opt for 44AD.

Conclusion:
• LLPs and companies are not eligible for presumptive taxation under Sections 44AD and 44ADA.
• Section 44AE may be an option for companies in the goods carriage business.

Recommendations:
• Ensure compliance with regular tax provisions.
• Explore alternative tax planning strategies.
• Stay updated with legislative changes.

References:
• Sections 44AD, 44ADA, 44AE of Income Tax Act
• CBDT Circulars
• Sampath Commentary
`
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


  const Feedback = () => {
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [selectedAnswerKey, setSelectedAnswerKey] = useState('A');
    const [ratings, setRatings] = useState({});
    const [user, setUser] = useState(null);
    const [reviewStatus, setReviewStatus] = useState({});
    const [reviewDataList, setReviewDataList] = useState([]); // NEW STATE TO STORE ALL REVIEWS
  
    // Load user on mount
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(setUser);
      return () => unsubscribe();
    }, []);
  
    // Set default selectedQuestion when questions are loaded
    useEffect(() => {
      if (questions.length > 0) {
        setSelectedQuestion(questions[0]);
        setSelectedAnswerKey('A');
        setRatings({});
      }
    }, []);
  
    if (!questions || questions.length === 0 || !selectedQuestion) {
      return <div>Loading questions...</div>;
    }
  
    const handleSelectQuestion = (question) => {
      setSelectedQuestion(question);
      setSelectedAnswerKey('A');
      setRatings({});
    };
  
    const handleSelectAnswer = (answerKey) => {
      setSelectedAnswerKey(answerKey);
      setRatings({});
    };
  
    const handleRatingChange = (param, value) => {
      setRatings((prev) => ({
        ...prev,
        [param]: value,
      }));
    };
  
    const getCorrectness = (question, answerKey) => {
      return question.correctAnswer === answerKey;
    };
  
    const calculateAvgRating = (ratings) => {
      const ratingValues = Object.values(ratings);
      if (ratingValues.length === 0) return 0;
      const total = ratingValues.reduce((sum, r) => sum + r, 0);
      return total / ratingValues.length;
    };
  
    const handleSubmit = () => {
      if (!user) {
        alert('User is not authenticated!');
        return;
      }
  
      const username = user?.displayName || 'Unknown User';
      const questionId = selectedQuestion.id;
      const answerId = selectedAnswerKey;
      const correctness = getCorrectness(selectedQuestion, answerId);
      const avgRating = calculateAvgRating(ratings);
  
      const reviewData = {
        username,
        questionId,
        answerId,
        correctness: correctness ? 1 : 0,
        accuracy: ratings.accuracy || 0,
        clarity: ratings.clarity || 0,
        completeness: ratings.completeness || 0,
        relevance: ratings.relevance || 0,
        avgRating: avgRating || 0,
      };
  
      // Save the review to our reviewDataList
      setReviewDataList((prevList) => [...prevList, reviewData]);
  
      console.log('Submitting review:', reviewData);
      alert('Review submitted successfully!');
  
      // Update reviewStatus after submission
      setReviewStatus((prevStatus) => ({
        ...prevStatus,
        [questionId]: {
          ...(prevStatus[questionId] || {}),
          [answerId]: true,
        },
      }));
    };
  
    const saveToExcel = () => {
      if (!user) {
        alert('User is not authenticated!');
        return;
      }
  
      if (reviewDataList.length === 0) {
        alert('No reviews submitted yet!');
        return;
      }
  
      const ws = XLSX.utils.json_to_sheet(reviewDataList);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Ratings');
      XLSX.writeFile(wb, 'ratings.xlsx');
    };
  
    // Count reviewed sections for progress display
    const sections = ['A', 'B', 'C', 'D', 'E'];
    const totalSections = questions.length * sections.length;
    const reviewedSections = Object.values(reviewStatus).reduce((acc, questionReviews) => {
      return acc + Object.values(questionReviews || {}).filter((reviewed) => reviewed).length;
    }, 0);
  
    return (
      <div className="app">
        <Sidebar
          questions={questions}
          onSelectQuestion={handleSelectQuestion}
          reviewStatus={reviewStatus}
        />
  
        <div className="content">
        <TopNav
  selectedAnswerKey={selectedAnswerKey}
  onSelectAnswer={handleSelectAnswer}
  reviewStatus={reviewStatus}
  currentQuestionId={selectedQuestion.id}
/>

          <QuestionDetail
            selectedQuestion={selectedQuestion}
            selectedAnswerKey={selectedAnswerKey}
            ratings={ratings}
            onRatingChange={handleRatingChange}
            onSaveToExcel={saveToExcel} // optional, if needed in QuestionDetail
          />
  
          <div style={{ padding: '10px', marginTop: '20px' }}>
            <strong>{reviewedSections} / {totalSections} sections reviewed</strong>
          </div>
  
          <div style={{ padding: '10px', marginTop: '20px', display: 'flex', gap: '10px' }}>
            <button id='b1' onClick={handleSubmit}>Submit Review</button>
            <button id='b2' onClick={saveToExcel}>Download Excel</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Feedback;