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



## **Ineligible Entities**
- **LLPs** and **companies** are **not eligible** to take advantage of the presumptive scheme under **Section 44ADA**.



## **Eligible Entities**

The following entities **are eligible** for the presumptive scheme under **Section 44ADA**:
1. **Individuals**
2. **Hindu Undivided Families (HUF)**
3. **Partnership firms** (excluding LLPs)



## **Additional Information**

This information is based on the provided context, which states that a **resident Individual** or **Partnership Firm** (excluding LLP) can claim the presumptive tax scheme under **Section 44ADA**.



## **Primary Parent Topics:**

1. **Business or Profession Presumptive Scheme for Professionals under Section 44ADA**
2. **Business or Profession Presumptive Scheme for Businesses under Section 44AD**
`,

      B: `## **Introduction**

The question of whether a **Limited Liability Partnership (LLP)** or a **company** in India can claim the benefits of the **presumptive taxation scheme** under the **Income Tax Act** is a significant one, as it affects the tax liabilities of these entities.



## **Eligibility for Presumptive Taxation Schemes**

- **Section 44AD** of the **Income Tax Act**, which provides a presumptive taxation scheme for small businesses, **does not apply to LLPs**.  
  It is only applicable to:  
  - **Individuals**  
  - **Hindu Undivided Families (HUFs)**  
  - **Partnership firms (excluding LLPs)**  

- Similarly, **Section 44ADA** of the **Income Tax Act**, which provides a presumptive taxation scheme for professionals, **also does not apply to LLPs**.

- **Companies are also not eligible** for these presumptive taxation schemes, as they are **not mentioned** in the eligible categories for either **Section 44AD** or **44ADA**.



## **Conclusion**

In conclusion, based on the analysis of the relevant provisions of the **Income Tax Act**,  
an **LLP** or a **company** in India **cannot claim the benefits** of the **presumptive taxation scheme** under the Act.  
The key reasons are:

1. **LLPs are excluded** from the eligibility criteria for the presumptive taxation schemes under **Sections 44AD and 44ADA** of the **Income Tax Act**.  
2. **Companies are also not eligible** for these presumptive taxation schemes, as they are **not mentioned** as eligible entities in the relevant provisions of the **Income Tax Act**.



## **Recommendation**

It is recommended that **LLPs** and **companies** in India explore **other available tax deductions and benefits** under the **Income Tax Act**, as they may be eligible for those based on their specific circumstances.

> 💡 *It is advisable for LLPs and companies to consult with a licensed tax professional or advocate to ensure compliance with the relevant provisions of the Income Tax Act and to explore all available tax-saving opportunities.*



## **Primary Parent Topics**

1. **Business or Profession Presumptive Scheme for Businesses under Section 44AD**  
2. **Business or Profession Presumptive Taxation Schemes**
`,

      C: `## **Introduction to Presumptive Taxation**

Presumptive taxation is a simplified tax compliance method for small taxpayers, allowing them to declare income at a prescribed rate without maintaining detailed records. The scheme is available under **Sections 44AD, 44ADA, and 44AE** of the Income Tax Act.



## **Eligibility Criteria**

1. **Section 44AD and 44ADA**:  
   These sections are available to **resident individuals**, **Hindu Undivided Families (HUFs)**, and **partnership firms** (excluding **Limited Liability Partnership (LLP)** firms).

2. **Section 44AE**:  
   This section applies to **every person**, including **individuals**, **HUFs**, **partnership firms**, and **companies**, engaged in the business of **plying, hiring, or leasing goods carriages**, provided they do not own more than **10 goods vehicles** at any time during the year.



## **Eligibility for LLPs and Companies**

1. **LLPs**:  
   LLPs are explicitly **excluded** from the presumptive taxation schemes under **Sections 44AD and 44ADA**. There is no specific provision for LLPs under **Section 44AE**.

2. **Companies**:  
   Companies are generally **not eligible** for the presumptive taxation scheme under **Sections 44AD and 44ADA**. However, if a company is engaged in the business of **plying, hiring, or leasing goods carriages** and meets the conditions under **Section 44AE**, it **may be eligible** for the presumptive taxation scheme.



## **Filing Implications**

1. **ITR-4 (SUGAM)**:  
   This form is designed for **individuals**, **HUFs**, and **partnership firms** (excluding LLPs) opting for the presumptive taxation scheme.

2. **ITR-5 and ITR-6**:  
   These forms are typically used by **LLPs and companies**, which do not incorporate presumptive taxation benefits, except in cases where a company falls under **Section 44AE**.



## **Conclusion**

In conclusion:  
- **LLPs** are **not eligible** for the presumptive taxation scheme under **Sections 44AD and 44ADA**.  
- **Companies** are **generally not eligible**, but may be eligible under **Section 44AE** if they meet the specified conditions.



## **Primary Parent Topics**

1. **Business or Profession Presumptive Scheme for Businesses under Section 44AD**  
2. **Business or Profession Presumptive Scheme for Transporters under Section 44AE**
`,

      D: `## **Eligibility for Presumptive Scheme under Section 44ADA**

The presumptive scheme under **Section 44ADA** is applicable to **resident assessees** who are:
      - **Individuals**
      - **Hindu Undivided Families (HUF)**
      - **Partnership firms** (but it **expressly excludes** Limited Liability Partnerships (**LLPs**)).
      
      
      
## **Ineligible Entities**
      
- **LLPs** and **companies** are **not eligible** to take advantage of the presumptive scheme under **Section 44ADA**.
      
      
      
## **Eligible Entities**
      
The following entities **are eligible** for the presumptive scheme under **Section 44ADA**:
1. **Individuals**
2. **Hindu Undivided Families (HUF)**
3. **Partnership firms** (excluding LLPs)
      
      
      
## **Additional Information**
      
This information is based on the provided context, which states that a **resident Individual** or **Partnership Firm** (excluding LLP) can claim the presumptive tax scheme under **Section 44ADA**.
      
      
      
## **Primary Parent Topics:**
      
1. **Business or Profession Presumptive Scheme for Professionals under Section 44ADA**  
2. **Business or Profession Presumptive Scheme for Businesses under Section 44AD**
      `,

      E: `## **Presumptive Scheme for Businesses under Section 44AD**

      
      
## **Introduction**
      
Section **44AD** is a **presumptive taxation scheme** applicable to an **Individual**, **HUF**, or **Partnership Firm (other than LLP)** engaged in any business, with a **turnover not exceeding Rs. 2 crores or Rs. 3 crores** during the year.
      
      
      
## **Eligibility Criteria**
      
Only **resident individuals**, **HUFs**, and **partnership firms (excluding LLPs)** are eligible for the presumptive taxation scheme under **Section 44AD**.
      
  
      
## **Exclusions**
      
- **LLPs** and **companies** are **excluded** from the benefits of **Section 44AD**.
      
      
      
## **Tax Compliance**
      
- **LLPs** and **companies** must maintain detailed **books of accounts** and undergo **audits** as required by the **Income Tax Act**.
      
      
      
## **Examples and Illustrations**
      
For instance:  
An **individual** running a **small business** can opt for the **presumptive scheme under Section 44AD**, whereas an **LLP** engaged in the **same business** **cannot** opt for this scheme.
      
      
      
## **Conclusion**
      
 **No, you cannot take benefit of the presumptive scheme in an LLP or company** as per the provisions of the **Income Tax Act, 1961**, specifically under **Section 44AD**, which explicitly excludes **LLPs** and **companies** from availing these benefits.
      
      
      
## **References**
      
1. **Income Tax Act, 1961**: Sections 44AD, 44ADA, 44AE  
2. **CBDT Circulars and Guidelines** on Presumptive Taxation  
      
      
      
## **Primary Parent Topics**
      
1. **Business or Profession Presumptive Scheme for Businesses under Section 44AD**  
2. **Business or Profession Presumptive Taxation Schemes**
      
`
      },
    },
    {
      id: 2,
      question: "What happens if I don’t pay advance tax?",
      answers: {
        A: `

        
        
## **Consequences of Default in Payment of Advance Tax**
        
If an assessee **fails to pay advance tax**, they are liable to pay **interest** under the following sections of the Income Tax Act, 1961:
        
- **Section 234B**: For **default** in payment of advance tax.
- **Section 234C**: For **deferment** of payment of advance tax.
        
        
        
### **Section 234B - Interest for Default in Payment of Advance Tax**
        
- Interest is levied if the **advance tax paid** by the due date of filing the return of income is **less than 90% of the assessed tax**.
        
        
        
### **Section 234C - Interest for Deferment of Advance Tax Instalments**
        
Interest is levied if **advance tax** is paid **later than the prescribed instalments** or **less than the prescribed percentage**.
        
#### **Due Dates and Instalment Percentages**
        
            | Due Date for Payment        | Minimum Advance Tax to be Paid   |
            |--------------------------------------|-------------------------------------------------|
            | On or before June 15            |   At least 15% of advance tax          |
            | On or before September 15  |      At least 45% of advance tax        |
            | On or before December 15   |      At least 75% of advance tax        |
            | On or before March 15          |     100% of advance tax                    |

        
#### **Interest Rate**
        
- The rate of interest under **Section 234C** is **1% per month** or **part thereof** on the shortfall.
        
        
        
### **Assumptions**
        
- The assessee is an **Indian resident**.
- The assessee has a **tax liability of Rs. 10,000 or more**.
        
        
        
### **Clarifications**
        
- It’s advisable to consult a **tax professional** to calculate the exact **interest payable** under **Sections 234B** and **234C**.
- Timely payment of **advance tax** according to prescribed **due dates** helps avoid interest liability.
        
        
        
### **Note**
        
This response is based on the **provided context** and intended for **general informational purposes** only.  
For personalized tax advice, please consult a **qualified tax professional**.
        
        
        
### **Primary Parent Topics**
        
1. **Interest and Fees** → *Interest for Deferment of Advance Tax*
2. **Advance Tax** → *Advance Tax*
        `,
        B: `

## Issue
        
The legal question at hand is:  
**What are the legal consequences and interest implications for not paying advance tax in India?**
        
This question requires an analysis of the relevant provisions of the Income Tax Act, 1961, and the judicial precedents interpreting these provisions, to determine the legal consequences and interest implications for an assessee who fails to pay the required advance tax in India.
        
## Rule
        
The key legal provisions and principles relevant to this issue are as follows:
        
1. **Liability to Pay Advance Tax (Section 208)**  
Every assessee, whether resident or non-resident, is liable to pay advance tax if the amount of such tax payable by the assessee for the previous year is ₹10,000 or more.
        
2. **Interest under Section 234B**
- Levy of simple interest at the rate of 1% per month or part of a month on the amount of shortfall in payment of advance tax.
- Calculated from April 1 following the financial year until the date of payment.
- Arises if the advance tax paid is less than 90% of the assessed tax.
        
3. **Interest under Section 234C**
- Levy of interest at 1% per month for deferment of advance tax installments.
- Levied for 3 months for shortfall in the 1st, 2nd, and 3rd installments, and for 1 month for shortfall in the last installment.
        
4. **Penalties (Section 234F)**
- Late filing penalty of ₹5,000 if income exceeds ₹5 lakh, and ₹1,000 if income is up to ₹5 lakh.
- In extreme cases, the Income Tax Department may initiate asset seizure, garnishment, and potential prosecution for significant tax evasion, which can result in imprisonment from 3 months to 7 years.
        
5. **Exceptions and Exclusions**
- Provisions of Sections 234B and 234C do not apply if the assessee has denied its tax liability in India.
- Where there is a conflict between the Income Tax Act and the Special Courts Act, the provisions of the Special Courts Act will prevail.
- No liability for interest if the assessee was under no obligation on the date of the alleged default.
        
## Application
        
Analysis of case laws and web sources provides the following insights:
        
1. **Liability to Pay Advance Tax**  
Established consistently in cases that every assessee, resident or non-resident, is liable under Section 208 if the tax payable exceeds ₹10,000.
        
2. **Interest under Section 234B**
- _General Motors Overseas Corporation vs. Asstt. CIT (2020)_: Section 234B doesn't apply to non-residents as tax is deductible at source.
- _Emdee Digitronics Pvt. Ltd. vs. Pr. CIT (2019)_: Interest on default in paying advance tax isn't an allowable deduction under Section 37.
- _ZTE Corporation vs. Addl. Director of Income-tax (2016)_: Establishment of default is a condition precedent for charging interest.
        
3. **Advance Tax under Minimum Alternate Tax (MAT)**
- _CIT vs. Sintex Industries Ltd. (2016)_: Interest under Sections 234B and 234C applies to failures under Section 115JA/115JB (MAT).
        
4. **Exceptions and Exclusions**
- _Gie Jewells vs. Pr. CIT (2018)_: No liability under Section 208 for AMT under Section 115JC.
- _CIT, Valsad vs. Rakshak Chemicals Pvt. Ltd. (2014)_ and _DCIT vs. Deepika Mehta (2012)_: Notified parties under the Special Courts Act aren't liable for penalties or interest.
- _Lamina Suspension Products Ltd. vs. Asst. CIT (2013)_: No interest liability if not obligated to pay at a particular rate on the date of alleged default.
        
## Conclusion
        
Based on the analysis, the key conclusions are:
        
1. **Liability to Pay Advance Tax**  
Every assessee, whether resident or non-resident, must pay advance tax if the tax payable exceeds ₹10,000.
        
2. **Interest under Section 234B**  
1% per month interest if the assessee fails to pay 90% of assessed tax, provided default is established.
        
3. **Interest under Section 234C**  
1% interest per month for deferment in advance tax installments.
        
4. **Penalties**  
Late filing penalties and, in extreme cases, asset seizure and potential prosecution.
        
5. **Exceptions and Exclusions**  
Certain cases exempt from Sections 234B and 234C, including denials of tax liability or conflicts with the Special Courts Act.
        
## Recommendations
        
1. Ensure timely payment of advance tax to avoid interest and penalties.
2. If unable to comply, file updated returns or seek professional advice to mitigate consequences.
3. Be aware of exceptions, such as denial of tax liability or Special Courts Act provisions.
4. In disputes or uncertainties, consult a licensed advocate or tax professional.
        
## Cases Referred
        
- General Motors Overseas Corporation vs. Asstt. CIT (ITAT, 2020)
- Emdee Digitronics Pvt. Ltd. vs. Pr. CIT (ITAT, 2019)
- Gie Jewells vs. Pr. CIT (HC, 2018)
- CIT, Jaipur vs. Rajendra Prasad Mittal (HC, 2017)
- Commissioner of Income-tax vs. Sintex Industries Ltd. (HC, 2016)
- ZTE Corporation vs. Addl. Director of Income-tax (ITAT, 2016)
- CIT, Valsad vs. Rakshak Chemicals Pvt. Ltd. (HC, 2014)
- Lamina Suspension Products Ltd. vs. Asst. CIT (HC, 2013)
- DCIT Cen Cir 23 vs. Deepika Mehta (ITAT, 2012)
        
        
        
## Disclaimer
        
- This legal research memorandum is provided for informational purposes only and does not constitute legal advice.
- The analysis and recommendations presented are based on the information provided in the cited case laws and sources, and may not cover all possible scenarios.
- It is recommended to consult a licensed advocate or tax professional for specific legal advice and representation.
- The paralegal assistant may have made mistakes or omissions in the analysis, and the user should verify the information independently.
        `,
        C: `## Advance Tax in India: Overview, Consequences, and Compliance Implications
## 1. Overview of Advance Tax in India
        
Advance tax requires taxpayers to pay their estimated tax liability in installments throughout the financial year rather than as a lump sum at the end.  
This mechanism benefits both:
        
- **The Government**: Ensures a steady revenue flow.
- **The Taxpayer**: Smoothens the payment process over the year and helps avoid a large outflow at the year’s end.
        
        
        
## 2. Detailed Consequences of Non-Payment
        
Below is an analysis of the consequences categorized by legal provision, each highlighting the nature of the penalty along with the applicable sections of the **Income-tax Act, 1961**.
        
### Interest under Section 234B
- If the advance tax paid is less than **90%** of the total assessed tax liability, simple interest accrues on the shortfall at **1% per month**.
- Interest is charged from **April 1** (the start of the assessment year) until the tax is fully paid.
- **Applicable Provision**: Section **234B** – Default in advance tax payment [1][4]

---

### Interest under Section 234C
- Applicable when there is a **deferment or shortfall** in paying scheduled advance tax installments.
- A rate of **1% per month (or part thereof)** is charged for each deficient installment.
- **Applicable Provision**: Section **234C** – Installment deferment [2][5]

---

### Penalties for Underestimation / Omission
- In cases of understatement or deferment leading to a deficiency, interest is charged at **15% per annum** on the gap between the amount paid and the required payment.
- Additional penalties may be imposed, which can compound if the taxpayer consistently fails to meet advance tax obligations.
- **Applicable Provisions**: Sections **216**, **217**, and **218** – Non-compliance [3]

        
        
        
## **Key Excerpts:**
        
- > “An assessee who is liable to pay advance tax … shall be liable to pay simple interest at the rate of one per cent for every month or part of a month” [1]  
- > “If he fails to pay the advance tax by 15th March of previous year, he shall be liable to pay interest as per section 234C.” [2]  
- > “For the period during which the payment was deficient, on the difference between the amount paid in each such instalment and the amount which should have been paid…” [3]  
        
        
        
## 3. Legal and Compliance Implications
        
###  **Additional Cost Burden**
Non-compliance results in immediate interest charges and increases the **overall tax liability**, as these charges accumulate until rectified.
        
- > “Failure to pay advance tax, or short payment of advance tax leads to interest implications, which becomes an additional compliance cost.” [6]
        
###  **Potential Legal Action**
Persistent non-compliance may invite **legal scrutiny**, including:
        
        - Fines  
        - Prosecution  
        - Imprisonment (in extreme cases)
        
        Although the focus is on financial penalties, additional severe penalties might be imposed in cases of **consistent non-compliance**.
        
###  **Presumptive Taxation Scheme Implications**
For taxpayers under the **Presumptive Taxation Scheme (Section 44AD)**:
        
- The **entire advance tax** must be paid **by March 15** of the financial year.
- Failure to pay by this deadline attracts **interest under Section 234C**.
        
- > “If he fails to pay the advance tax by 15th March of previous year, he shall be liable to pay interest as per section 234C.” [2]
        
        
        
## 4. Practical Example for Clarification
        
**Scenario**:  
A taxpayer has an **assessed tax liability** of **₹1,00,000** for the financial year.  
If they pay **less than 90%** (i.e., less than **₹90,000**) as advance tax:
        
- **Under Section 234B**:  
A **shortfall** (say **₹15,000**) attracts **1% interest per month** starting **April 1** until fully paid.
        
- **Under Section 234C**:  
If specific **installments** are missed or short-paid, **additional 1% interest** is levied **for each deficient installment period**.
        
This demonstrates how **non-compliance** can lead to **substantial extra costs** over time.
        
        
        
## 5. Conclusion Recap
        
Failure to pay or under-pay **advance tax in India** leads to:
        
-  **Interest under Section 234B**:  
**1% per month** on shortfall from April 1.
        
-  **Interest under Section 234C**:  
Additional **1% per month** for deferment or deficiency in installments.
        
-  **Additional Penalties**:  
Particularly for **consistent underestimation or omission** of advance tax payments.
        
        
        
##  Final Takeaway  
It is **essential** for taxpayers to **plan** and **adhere** to the advance tax schedule to:
        
- Minimize **interest and penalties**  
- Avoid **compliance costs**  
- Prevent potential **legal consequences**
        `,
        D: `## Consequences of Not Paying Advance Tax in India

If you do not pay advance tax, you may face several consequences as per the provisions of the Income Tax Act. Below are the key implications of non-payment:
        
### 1. Interest Penalty
The Income Tax Department may levy interest on the unpaid amount of advance tax. This interest is charged under the following sections of the Income Tax Act:
        
- **Section 234B**: Imposes interest for default in payment of advance tax.
- **Section 234C**: Imposes interest for deferment of advance tax installments.
        
        
        
### 2. Increased Tax Liability
- If you fail to pay advance tax, you will still be required to pay the total tax liability at the time of filing your income tax return.
- This can result in a **larger lump sum payment**, which may be difficult to manage financially.
        
        
        
### 3. Late Fees
- In addition to interest charges, **late fees** may apply if the tax is not paid by the stipulated due dates.
        
        
        
### 4. Legal Action
- Persistent failure to comply with advance tax payment obligations can lead to **legal actions** by tax authorities.
- These actions may include **penalties** or other **enforcement measures**.
        
        
        
### 5. Impact on Credit Rating
- Non-payment or delayed payment of taxes may negatively affect your **credit rating**.
- A poor credit rating can make it difficult to **secure loans or credit** in the future.
        
        
        
### Recommendation
It is advisable to **pay advance tax on time** to avoid these penalties and to stay compliant with tax regulations.
        
        
        
### References
- 2 Sampath Volume 4 (13th Edition)
- 1 Sampath Volume 1 (13th Edition)
        `,
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