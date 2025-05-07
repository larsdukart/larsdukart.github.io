# Amazon Sales EDA

## Overview  
This Jupyter Notebook delivers a business-focused exploratory analysis of Amazon sales performance. By transforming raw transaction records into actionable metrics, it uncovers revenue drivers, product mix dynamics, and operational bottlenecks—empowering decision-makers to prioritize marketing spend, optimize inventory, and negotiate supplier terms.

## Contents  
1. **Data Ingestion & Inspection**  
   - Load and validate 20,000+ orders in pandas  
   - Assess data quality, completeness, and cardinality  
2. **Data Cleaning & De-duplication**  
   - Remove irrelevant fields and duplicate transactions  
   - Standardize column names and impute missing values  
3. **Feature Engineering**  
   - Compute `Total Value` per order to spotlight high-margin items  
4. **Univariate & Categorical Analysis**  
   - Identify typical order sizes and outliers with histograms + KDE  
   - Quantify order volume by product category using count plots  
5. **Revenue Breakdown & Segmentation**  
   - Filter non-retail (B2B) orders to isolate consumer trends  
   - Visualize category-level sales contributions for portfolio optimization  

## Next Steps  
- Integrate time-series forecasts (e.g., ARIMA or Prophet) to project quarterly revenue  
- Conduct RFM segmentation to target top customer cohorts  
- Perform correlation and sensitivity analysis to evaluate discount impact  
- Build an interactive dashboard (Streamlit or Dash) for executive reporting  

## Skills & Tools Used  
- **Language:** Python 3.x  
- **Data Wrangling:** pandas, NumPy  
- **Visualization:** matplotlib, seaborn  
- **Environment:** Jupyter Notebook  
- **Supplementary Library:** holidays (for future seasonality analysis)

---

