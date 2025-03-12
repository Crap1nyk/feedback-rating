import React, { useState,useEffect} from 'react';
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import QuestionDetail from './QuestionDetail';
import * as XLSX from 'xlsx';
import './App.css';
import { auth } from './firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';




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
Section 44AD of the **Income Tax Act**, which provides a presumptive taxation scheme for small businesses, **does not apply to LLPs**.  

It is only applicable to:
- **Individuals**  
- **Hindu Undivided Families (HUFs)**  
- **Partnership firms (excluding LLPs)**  

Similarly, **Section 44ADA** of the **Income Tax Act**, which provides a presumptive taxation scheme for professionals, **also does not apply to LLPs**.

**Companies are also not eligible** for these presumptive taxation schemes, as they are **not mentioned** in the eligible categories for either **Section 44AD** or **44ADA**.



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
      
**LLPs** and **companies** are **not eligible** to take advantage of the presumptive scheme under **Section 44ADA**.
      
      
      
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
        E: `# Consequences of Not Paying Advance Tax Under Indian Income Tax Laws

Advance tax is a mechanism to ensure that taxpayers pay their taxes in installments throughout the year, rather than in a lump sum at the end of the financial year. This system helps the government manage its cash flow and reduces the burden on taxpayers. However, failing to pay advance tax can lead to several consequences, including interest penalties and being deemed an assessee in default.
        
        
        
##  Applicable Sections and Rules
        
### **Section 208 of the Income Tax Act, 1961**
- Mandates the payment of advance tax for every person whose estimated tax liability for the year is **₹10,000 or more**.
        
### **Section 234B**
- Deals with **interest for defaults** in payment of advance tax.
- If an assessee fails to pay advance tax, or if the advance tax paid is **less than 90%** of the assessed tax:
- They are liable to pay **interest at 1% per month (or part of a month)** on the shortfall.
- Interest is calculated from the **due date of the last installment** to the **date of assessment**.
        
### **Section 234C**
- Imposes **interest for deferment** of advance tax.
- If the advance tax paid is less than the prescribed percentage of the tax due on the returned income:
- Interest is charged at **1% per month for a period of three months** on the shortfall for **each installment**.
        
        
        
##  Notifications, Circulars, Guidelines, Instructions
        
### **CBDT Circulars**
- The **Central Board of Direct Taxes (CBDT)** has issued various circulars clarifying:
- Computation and payment of advance tax.
- The importance of **timely payment** to avoid interest penalties.
        
        
        
##  Case Laws and Judicial Precedents
        
### **CIT v. Anjum M.H. Ghaswala (2001) 252 ITR 1 (SC)**
- The Supreme Court held that **interest under Sections 234B and 234C is mandatory**.
- Such interest **cannot be waived** by the Settlement Commission.
        
### **CIT v. Ranchi Club Ltd. (2001) 247 ITR 209 (SC)**
- The Supreme Court reiterated that **interest under Section 234B is compensatory** in nature.
- It is levied for the **delay in payment** of advance tax.
        
        
        
##  Practical Implications
        
- **Interest Penalties**: Taxpayers who fail to pay advance tax or pay less than the required amount are subject to interest penalties under Sections 234B and 234C. This **increases** the overall tax liability.
- **Cash Flow Management**: Non-payment of advance tax can lead to **cash flow issues** for businesses, as they may have to pay a **lump sum** at the end of the year along with interest.
- **Compliance**: Regular payment of advance tax ensures **compliance** with tax laws and avoids penalties.
        
        
        
##  Examples for Clarity
        
### Example 1
- An individual with an estimated tax liability of **₹1,00,000** for the year **fails to pay** any advance tax.
- They will be liable to pay **interest under Section 234B** from **April 1st following the financial year until the date of assessment**.
        
### Example 2
- A company with a tax liability of **₹10,00,000** pays only **₹6,00,000** as advance tax by **March 15th**.
- The shortfall of **₹4,00,000** will attract **interest under Section 234C** for deferment of advance tax.
        
        
        
##  Conclusion and Recommendations
        
### **Key Points**
- Advance tax is **mandatory** for taxpayers with a liability of **₹10,000 or more**.
- Failure to pay advance tax results in **interest penalties** under Sections 234B and 234C.
- Regular payment of advance tax ensures **compliance** and avoids **additional financial burdens**.
        
### **Recommendations**
- Taxpayers should **estimate their tax liability accurately** and pay advance tax in installments as prescribed.
- Stay **updated with CBDT circulars and notifications** to ensure compliance.
        
        
        
##  References
        
- **Sections**: 208, 234B, 234C of the Income Tax Act, 1961
- **Case Laws**:
- CIT v. Anjum M.H. Ghaswala
- CIT v. Ranchi Club Ltd.
- **Circulars**: CBDT guidelines on advance tax
        
        
        
This comprehensive analysis provides clarity on the consequences of not paying advance tax, ensuring **compliance** and **informed tax planning**.
        `,
      },
    },
    {
      id: 3,
      question: "Income tax effect on write off of Bad Debts?",
      answers: {
        A: `## Legal Question Overview
The legal question relates to the **income tax implications of writing off bad debts during the financial year in India**. Specifically, it asks how the write-off of bad debts affects the **taxable income** and **tax liability** of the taxpayer.
        
        
        
## Key Components of the Question
        
- **Topic/Area of Law:**  
Income tax law in India.
        
- **Specific Legal Issue:**  
The tax treatment of writing off bad debts.
        
- **Parties Involved:**  
The taxpayer.
        
- **Conditions/Circumstances:**  
During the financial year.
        
        
        
## Key Legal Concepts and Jargon
        
- **Bad Debts:**  
Debts that a taxpayer is unable to recover, typically because the debtor is insolvent or has defaulted on payment.
        
- **Taxable Income:**  
The amount of income that is subject to income tax, as determined by the relevant tax laws and regulations.
        
- **Tax Liability:**  
The amount of tax that a taxpayer is required to pay to the government based on their taxable income.
        
        
        
## Relevant Legal Provisions
        
To address this question, we refer to the relevant provisions of the **Income Tax Act, 1961** in India.
        
### Section 36(1)(vii) of the Income Tax Act, 1961
- Allows for a deduction from the taxpayer's **taxable income** for the amount of any bad debt or part thereof which has been written off as irrecoverable in the books of account of the taxpayer.
- This deduction reduces the taxpayer's **taxable income** and, consequently, their **tax liability**.
        
        
        
## Conditions for Allowing Deduction of Bad Debts
        
The following conditions and requirements must be met for the bad debt write-off to be allowed as a deduction under Section 36(1)(vii):
        
1. **Debt Recognition:**  
The debt must have been taken into account in computing the income of the taxpayer for the year in which the amount of such debt was written off or for any earlier year.
        
2. **Write-off Requirement:**  
The debt must be written off as irrecoverable in the books of account of the taxpayer.
        
3. **Recovery Efforts:**  
The taxpayer must have taken all reasonable steps to recover the debt.
        
        
        
## Impact on Taxable Income and Tax Liability
        
- If the above conditions are satisfied, the amount of the bad debt write-off can be **deducted from the taxpayer's taxable income**, thereby reducing their **overall tax liability** for the financial year.
        
## Legal Research Memorandum

## Income Tax Implications of Writing Off Bad Debts in India
        
        
        
## Issue
        
The key issue to be addressed is the **income tax implications of writing off bad debts** during the financial year in India. Specifically, the question focuses on how the write-off of bad debts affects the taxable income and tax liability of the taxpayer.
        
        
        
## Rule
        
The relevant legal provisions governing the income tax treatment of bad debts in India are contained in:
        
- **Section 36(1)(vii)** of the Income Tax Act, 1961
- **Section 36(2)** of the Income Tax Act, 1961
        
### Section 36(1)(vii) - Deduction for Bad Debts
- The debt must be related to the business or profession of the taxpayer.
- The debt must have been taken into account in computing the income of the taxpayer for the previous year or an earlier previous year.
- The debt must be written off as irrecoverable in the books of accounts of the taxpayer for the previous year.
        
### Section 36(2) - Conditions for Allowance of Deduction
- The debt must have been taken into account in computing the income of the taxpayer in the previous year in which the amount is written off or in an earlier previous year.
- The taxpayer must have taken all reasonable steps to recover the debt.
        
        
        
## Judicial Precedents
        
### Key Judicial Precedents on Bad Debts Deduction (Income Tax Act, 1961)

1. **Karur Vysya Bank Ltd Karur vs. DCIT, Circle-2(1), Trichy (ITAT, 2024)**  
   *Held that bad debts must be charged to the Profit and Loss account for the assessee to claim deduction.*

2. **ACIT 19(1), Mumbai vs. Ketan Anil Shah (ITAT, 2023)**  
   *Held that any amounts recovered from previously written-off debts should be included as income in the year of recovery.*

3. **IFCI Limited vs. DCIT Circle-11(1), New Delhi (ITAT, 2020)**  
   *Clarified that bad debts must be written off in the books of accounts in the relevant accounting year to be eligible for deduction.*

4. **Spar Krognos Marketing Pvt. Ltd. vs. ITO, Ward-9(1), New Delhi (ITAT, 2020)**  
   *Assessee should satisfy itself that the debt is no longer recoverable before writing it off.*

5. **Xalted Information Systems Pvt. Ltd. vs. ITO, Ward-7(1)(2), Bengaluru (ITAT, 2020)**  
   *Confirmed that the debt written off had been previously included as income in earlier years.*

6. **Dhanalaxmi Bank Ltd. vs. ACIT, Circle-1(1), Thrissur (ITAT, 2019)**  
   *Reiterated that "write-off of bad debts" should be interpreted consistently, aligning with the Supreme Court's ruling in Vijaya Bank.*

7. **Yogendra Khandelwal vs. JCIT, Range-03, Jaipur (ITAT, 2018)**  
   *Assessee’s claim for bad debts was rejected due to lack of evidence proving the debts were irrecoverable.*

8. **Sahjanand Medical Technologies Pvt. Ltd. vs. ACIT, Circle-4 & 1 (HC, 2016)**  
   *Held that bad debts must be written off as irrecoverable in the books of accounts for the relevant previous year to claim deduction.*

9. **M/s. Sella Synergy India Pvt. Ltd. vs. DCIT, Circle VI(2), Chennai (ITAT, 2016)**  
   *The amounts written off as bad debts were shown as income in preceding years, satisfying Section 36(2)(i) conditions.*

10. **ACIT vs. Hariharan Foundations Pvt. Ltd (ITAT, 2015)**  
    *Post 01.04.1989 amendment, there is no requirement to prove that the debt became bad; a write-off in the books of accounts is sufficient.*

        
        
## Application
        
Based on the analysis of legal provisions and judicial precedents:
        
- **Deduction Allowed**: A deduction is allowed for bad debts related to the business/profession if they are written off as irrecoverable.
- **Conditions for Deduction**: Taxpayer must satisfy **Sections 36(1)(vii)** and **36(2)**.
- **Actual Write-off Required**: The taxpayer must write off the bad debt in the books of accounts.
- **Impact on Taxable Income**: Reduces the taxable income, thereby reducing tax liability.
- **Recovery of Bad Debts**: Amounts recovered later are treated as income in the year of recovery.
- **Conflicting Judicial Precedents**: Most precedents favor the taxpayer, but there are exceptions.
        
                
## Conclusion
        
- Taxpayers can claim a deduction for bad debts written off as irrecoverable, subject to **Sections 36(1)(vii)** and **36(2)**.
- Write-off reduces taxable income and tax liability.
- Recovery of bad debts in future years is taxable.
- Ensure compliance with legal provisions due to conflicting judicial precedents.
        
        
        
## Recommendations
        
- Maintain proper **documentation** and **evidence** for bad debts write-off.
- Ensure debts are **written off** in the books of accounts for the relevant financial year.
- Consult a **qualified tax professional** or **licensed advocate** in case of uncertainty.
- Stay updated on **changes** in tax laws or administrative guidance.
          
        
        
## Cited Cases
        
1. *Karur Vysya Bank Ltd Karur vs. DCIT, Circle -2(1), Trichy (ITAT, 2024)*
2. *Asst. Commissioner of Income-tax 19(1), Mumbai vs. Ketan Anil Shah (ITAT, 2023)*
3. *IFCI Limited vs. DCIT Circle-11(1), New Delhi (ITAT, 2020)*
4. *Spar Krognos Marketing Pvt. Ltd. vs. ITO, Ward-9(1), New Delhi (ITAT, 2020)*
5. *Xalted Information Systems Pvt. Ltd. vs. ITO, Ward-7(1)(2), Bengaluru (ITAT, 2020)*
6. *Dhanalaxmi Bank Ltd. vs. ACIT, Circle-1(1), Thrissur (ITAT, 2019)*
7. *Yogendra Khandelwal vs. JCIT, Range-03, Jaipur (ITAT, 2018)*
8. *Sahjanand Medical Technologies Pvt. Ltd. vs. ACIT, Circle 4 & 1 (HC, 2016)*
9. *M/s. Sella Synergy India Pvt. Ltd. vs. DCIT, Circle VI(2), Chennai (ITAT, 2016)*
10. *ACIT vs. Hariharan Foundations Pvt. Ltd (ITAT, 2015)*
        
        
        
## Disclaimer
        
- This legal research memorandum is provided for informational purposes only and **does not constitute legal advice**.
- The analysis and recommendations are based on available information and may not cover all complexities.
- Taxpayers are advised to seek **professional legal advice** from a licensed advocate for accurate and appropriate treatment of bad debts in their specific circumstances.
        `,
        B: `## Income Tax Effect on the Write-off of Bad Debts

The income tax effect on the write-off of bad debts is governed by the provisions of the **Income Tax Act, 1961**. A **bad debt** is the portion of a debt that cannot be recovered from the parties. To claim a deduction for bad debts, certain conditions must be met.
        
        
        
## Conditions for Claiming Deduction for Bad Debts
        
1. **Existence of Debt**  
A bad debt presupposes the existence of a debt, and a relationship of debtor and creditor is essential.
        
2. **Writing Off of Bad Debts**  
Bad debt is allowable as a deduction in the year in which it is actually written off as irrecoverable in the books of the assessee.
        
3. **Debt Incidental to Business**  
The debt claimed as a bad debt must be incidental to the business or profession carried on by the assessee.
        
4. **Business Not Discontinued**  
The business should not be discontinued, and the right to claim the bad debt is attached to the business, not to a particular assessee.
        
        
        
## Recovery of Bad Debts
        
If a bad debt is recovered, it shall be **taxable as business profit** in the year of recovery.
        
        
        
## Taxation of Recovered Bad Debts
        
The taxation of recovered bad debts is governed by **Section 41(1)** of the Income Tax Act, 1961.  
Any amount recovered towards a debt, against which a deduction has been allowed, shall be **charged to tax under Section 41(1)** in the previous year in which the amount is recovered.
        
        
        
## Conclusion
        
In conclusion, the write-off of bad debts has a **significant impact on income tax**. The deduction for bad debts is allowed under the **Income Tax Act, 1961**, subject to certain conditions:
        
- Bad debts are allowable as a deduction in the year in which they are actually written off as irrecoverable in the books of the assessee.
- The recovery of bad debts is taxable as business profit in the year of recovery.
- The taxation of recovered bad debts is governed by **Section 41(1)**.
        
### Conditions Recap:
- Existence of a debt  
- Writing off of bad debts  
- Debt incidental to business  
- Business not discontinued  
        
        
        
## Primary Parent Topics
        
- **Business or Profession: Deduction for Bad Debts**  
- **Business or Profession: Deduction for Provision for Bad and Doubtful Debts**
        `,
        C: `## Overview and Key Details

        
        
## Definition and Criteria for Bad Debts
        
### What Constitutes a Bad Debt
A bad debt is one which has been identified in the accounts of a business as irrecoverable. Merely creating a provision for such debts is not enough for tax deduction. The debt must be actually written off.
        
> "Under the existing provisions of the Income-tax Act, a mere provision for bad and doubtful debts is not allowed as deduction in computing the taxable profits of a business or profession; in order to qualify for deduction, the taxpayer has to write off the debt to claim a deduction." [3]
        
### Historical Context
Initially, in 1969, it was suggested to allow full automatic deduction for banks’ bad debts; however, this was rejected because the determination of debt irrecoverability was considered a factual issue requiring examination by the Income-tax Officer.
        
> "It was not possible to accept the suggestion that the bad debts claimed by banks should be automatically allowed in their entirety in the assessments of the banks." [1]
        
        
        
## Procedural Requirements for Writing Off Bad Debts
        
### Actual Write-Off Requirement
To avail the deduction, the bad debt must be written off as irrecoverable in the financial accounts—the mere creation of a provision is insufficient.
        
> "Only in case of write-off of bad debts, mere write-off is sufficient and the assessee is not required to establish that the debt in question has become bad and irrecoverable in the year in which it is claimed as deduction." [7]
        
### Timing of Deduction
The amendment effective from the assessment year 1989-90 clarified that a deduction is permitted in the year when the debt is actually written off, removing the previous requirement to prove the specific year in which the debt became irrecoverable.
        
> "The claim for bad debt will be allowed in the year in which such a bad debt has been written off as irrecoverable in the accounts of the assessee." [2]
        
        
        
## Tax Implications on Taxable Income
        
#### Deduction Under Section 36(1)(vii)
Once the debt is written off in the books, it qualifies for deduction from the taxable income. This means that the write-off directly reduces the taxable profit of the business in that financial year.
        
> "Bad debts which have been written off as irrecoverable (Subject to certain conditions)." [8]
        
### Additional Considerations
If the debt was not accounted for in previous years or if procedural conditions (such as those laid out in Section 36(2)) are not met, the deduction may be disallowed.
        
> "The amount of Rs 1,47,81,233/- was advance only ... Therefore, the claim of the assessee ...fails the condition laid out in section 36(2)(i) of IT Act, 1961." [9]
        
Even if the deduction as a “bad debt” is denied due to unmet conditions, courts have sometimes allowed the loss as a business loss if it is incidental to carrying on the business.
        
> "Even if the deduction is not allowable as bad debts, the Tribunal ought to have considered the assessee's claim for deduction as business loss." [10]
        
        
        
## Relevant Legal Provisions and Their Implications
        
#### For General Businesses
Deduction for written-off bad debts is available under Section 36(1)(vii) provided documentation substantiates that the debt is indeed irrecoverable.
        
### Specific Provisions for Banks and Financial Institutions
Banks have two avenues for claiming bad debts:
        
1. **Section 36(1)(viia):** Allows deduction on creating a provision for bad and doubtful debts, but only within specified limits (e.g., a percentage of gross total income or aggregate rural advances).
        
> "The limit specified under section 36(1)(viia) ... restricts the claim of deduction for provision for bad and doubtful debts..." [4]
        
2. **Section 36(1)(vii):** Permits an additional deduction for amounts written off that exceed the credit balance in the provision account.
        
> "The deduction under said clause (vii) shall be limited to the amount by which the bad debt written off exceeds the credit balance in the provision for bad and doubtful debts account..." [4]
        
        
        
## Supporting Judicial and Legislative Interpretation
Legislative clarifications, such as Circular No. 12/2016 (30 May 2016), have reaffirmed that once the bad debt is written off, the further evidentiary requirement to prove its irrecoverability in the same year is waived.
        
> "After 1.4.1989, for allowing a deduction for the amount of any bad debt ... it is not necessary for the assessee to establish that the debt, in fact, has become irrecoverable; it is enough if the bad debt is written off as irrecoverable in the accounts of the assessee." [5]
        
        
        
## Practical Examples to Illustrate the Application
        
- **Business A writes off a bad debt:** The bad debt, once written off from the accounts, reduces its taxable income as per Section 36(1)(vii). [2], [7]
        
- **Bank B’s dual mechanism:** It first recognizes a provision for bad debts under Section 36(1)(viia) up to a prescribed limit. If the actual loss exceeds this amount, the excess is claimed as a written-off bad debt under Section 36(1)(vii). [4]
        
- **Debt not taken into previous year:** If the bad debt was never included in the income computations of a previous year, it can lead to disallowance based on Section 36(2)(i). [9]
        
- **Claiming loss as business loss:** When conditions for a bad debt deduction are not met, the same loss may be allowed as a business loss if it is incidental to the business. [10]
        
- **International transaction issue:** In cross-border cases, extra evidence (such as proof of actual insolvency) is needed to qualify for write-off treatment. [11]
        
        
        
## Conclusion
The income tax effect of writing off bad debts in India is that once a bad debt is written off as irrecoverable in the books of accounts—and provided it meets prescribed conditions—it is allowed as a deduction under Section 36(1)(vii) for the assessment year in which the write-off occurs. This deduction, however, is subject to specific limitations, especially for banks and financial institutions, and requires that certain procedural and evidentiary requirements be met.
        `,
        D: `The treatment of bad debts in income tax is primarily governed by **Section 36** of the Income Tax Act. Here are the key points regarding the income tax effect on the write-off of bad debts:

        
        
## Deduction for Bad Debts
        
Under **Section 36(1)(vii)**, a taxpayer can claim a deduction for any bad debt that has been written off as irrecoverable in the accounts for the previous year.  
This means that the entire amount of bad debt written off is deductible in the year it is written off, eliminating previous disputes regarding the year in which a bad debt could be claimed.  
**[1]**
        
        
        
## Conditions for Allowability
        
- The debt must have been taken into account in computing the taxable income of the taxpayer in the previous year.  
- This ensures that only debts that have been recognized in the income calculation can be written off.  
**[1]**
        
        
## Write-Off Requirement
        
 - The write-off must be **actual** and not merely a **provision** for bad debts.  
  - The Finance Act has clarified that any provision made for bad and doubtful debts **cannot** be treated as a write-off.  
- The debt must be explicitly written off in the **profit and loss account**.  
**[1]**
        
        
        
## Banking and Financial Institutions
        
- For banks and financial institutions, **Section 36(1)(viia)** allows for a deduction for provisions made for bad and doubtful debts.  
- However, the amount of bad debt that can be claimed as a deduction under **Section 36(1)(vii)** is limited to the amount that exceeds the credit balance in the provision for bad and doubtful debts account.  
**[1]**
        
        
        
## No Double Deduction
        
- If a bad debt has already been allowed as a deduction based on a provision, it **cannot** be claimed again as a bad debt.  
- This is to prevent **double deductions** for the same amount.  
**[1]**
        
        
## Judicial Precedents
        
- Various judicial decisions have reinforced that the mere failure to initiate legal proceedings does **not** disqualify a debt from being considered bad.  
- The courts have held that if the debtor is **unable to pay** or is declared **sick**, the debt can still be written off as bad.  
  **[1]**
        
        
        
## Summary
        
The write-off of bad debts has significant implications for income tax, allowing for deductions under specific conditions while ensuring that the process is **transparent** and prevents **double deductions**.  
It is essential for taxpayers to maintain proper documentation and follow the prescribed accounting practices to ensure compliance with tax regulations.  
**[1] Sampath Volume 4 (13th Edition)**
        `,
        E: `## Impact of Income Tax on Write-Off of Bad Debts

In the context of Indian taxation, the treatment of bad debts is governed by specific provisions under the **Income Tax Act, 1961**.  
Understanding these provisions is crucial for taxpayers, especially businesses, as it affects their taxable income and financial statements.
        
        
        
## Applicable Sections and Rules
        
### **Section 36(1)(vii)**  
- Allows for the **deduction** of bad debts that have been written off as **irrecoverable** in the accounts of the assessee for the previous year.  
- The deduction is subject to the conditions laid out in **Section 36(2)**.
        
### **Section 36(2)**  
Specifies the conditions under which a bad debt can be claimed as a deduction:  
- The debt must have been **taken into account** in computing the income of the assessee for the previous year or an earlier year.  
- It must represent **money lent** in the ordinary course of the business of banking or money-lending.
        
### **Section 43D**  
- Deals with the **taxation of interest** on bad or doubtful debts in the case of public companies, financial institutions, and banks.  
- Specifies that such interest is chargeable to tax in the year it is **credited to the profit and loss account** or **received**, whichever is earlier.  
**[1]**
        
        
        
## Notifications, Circulars, Guidelines, Instructions
        
### **CBDT Circulars**  
- The **Central Board of Direct Taxes (CBDT)** has issued various circulars clarifying the treatment of bad debts.  
- These circulars emphasize that the **mere provision** for bad debts is not sufficient; the debt must be **actually written off** in the books of accounts.
        
        
        
## Case Laws and Judicial Precedents
        
### **T.R.F. Ltd. v. CIT (2010) 323 ITR 397 (SC)**  
- The **Supreme Court** held that after the amendment to Section 36(1)(vii) with effect from **April 1, 1989**, it is **not necessary** for the assessee to establish that the debt has become irrecoverable.  
- It is sufficient if the bad debt is **written off as irrecoverable** in the accounts of the assessee.  
 **[3]**
        
### **CIT v. Shreyas S. Morakhia (2012) 342 ITR 285 (Bom)**  
- The **Bombay High Court** ruled that the brokerage from the transaction of purchase of shares, which was taxed as business income, satisfied the requirements of Section 36(1)(vii) read with Section 36(2),  
allowing the **deduction** of the amount **not recovered** from clients.  
**[2]**
        
### **Vijaya Bank v. CIT (2010) 323 ITR 166 (SC)**  
- The **Supreme Court** clarified that it is not necessary to **close individual accounts** of the debtors.  
- A **reduction in the loans and advances account** is sufficient for claiming a deduction.  
 **[4]**
        
        
        
## Practical Implications
        
### **For Taxpayers:**  
- Businesses must ensure that bad debts are **written off** in their books to claim deductions.  
- This impacts the **taxable income** and can lead to **tax savings**.
        
### **For Compliance:**  
- Proper **documentation** and **accounting entries** are crucial.  
- The write-off should be reflected in the **profit and loss account**, and corresponding entries should be made in the **debtor's account**.
        
        
        
## Examples for Clarity
        
### **Example 1:**  
A company has a debtor who owes **INR 1,00,000**.  
The debtor becomes **insolvent**, and the company **writes off** the amount as a bad debt in its accounts.  
➡️ The company can claim a deduction of **INR 1,00,000** under Section **36(1)(vii)**.
        
### **Example 2:**  
A bank lends **INR 5,00,000** to a borrower in the ordinary course of its business.  
The borrower **defaults**, and the bank writes off the amount as a bad debt.  
➡️The bank can claim a deduction, provided the conditions under Section **36(2)** are met.
        
        
        
## Conclusion and Recommendations
        
### **Key Points:**  
- Bad debts must be **written off** in the accounts to claim a deduction.  
- The debt should have been considered in computing income in the **current** or **previous years**.  
- Judicial precedents support the deduction if the write-off is **genuine** and **documented**.
        
### **Recommendations:**  
- Ensure **accurate accounting practices** to reflect bad debts.  
- Stay updated with **CBDT circulars** and **judicial rulings** to ensure compliance.
        
        
        
## References
        
- **Sections:** 36(1)(vii), 36(2), 43D of the Income Tax Act, 1961  
- **Case Laws:**  
- T.R.F. Ltd. v. CIT  
- CIT v. Shreyas S. Morakhia  
- Vijaya Bank v. CIT  
- **Circulars:** CBDT guidelines on bad debts  
        `,
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
 

const navigate = useNavigate();

    const handleLogout = () => {
      signOut(auth).then(() => {
        navigate('/login'); // or wherever your login page is
      });
    };
  
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
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          padding: '10px'
        }}>
          <button id="logout-button" onClick={handleLogout} style={{ backgroundColor: 'red', color: 'white', padding: '8px 12px', border: 'none', borderRadius: '4px' }}>
            Logout
          </button>
        </div>
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