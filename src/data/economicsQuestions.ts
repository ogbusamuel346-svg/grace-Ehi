import { Question } from '../types';

export const economicsQuestions: Question[] = [
  {
    id: 1,
    topic: 'Basic Economic Concepts',
    question: 'The fundamental economic problem that faces all societies arises primarily because:',
    options: [
      'Human wants are unlimited while productive resources are scarce',
      'Governments fail to allocate financial revenues equitably',
      'The banking sector creates an excess supply of fiat currency',
      'Population growth always outstrips agricultural productivity'
    ],
    correctIndex: 0,
    explanation: 'Scarcity is the central economic problem: human wants are virtually insatiable, but the productive resources (land, labour, capital, entrepreneurship) required to satisfy them are finite and limited.'
  },
  {
    id: 2,
    topic: 'Basic Economic Concepts',
    question: 'Opportunity cost is best defined in economic theory as:',
    options: [
      'The monetary outlay required to purchase a capital asset',
      'The value of the next best alternative foregone when a choice is made',
      'The total accounting cost minus indirect taxes and subsidies',
      'The loss incurred when a firm sells below average variable cost'
    ],
    correctIndex: 1,
    explanation: 'Opportunity cost refers to the real cost of satisfying any want, measured in terms of the highest-valued forgone alternative commodity or opportunity sacrificed.'
  },
  {
    id: 3,
    topic: 'Production Possibility Curve',
    question: 'A point situated inside (beneath) a country’s Production Possibility Curve (PPC) signifies:',
    options: [
      'An unattainable level of output given current technology',
      'Inefficient utilization or underemployment of available resources',
      'Optimal economic growth and technical efficiency',
      'That opportunity cost between the two goods has fallen to zero'
    ],
    correctIndex: 1,
    explanation: 'Points inside the PPC represent productive inefficiency, indicating that resources are either idle, underemployed, or utilized with suboptimal technological methods.'
  },
  {
    id: 4,
    topic: 'Theory of Demand',
    question: 'Which of the following causes an outward (rightward) shift of the market demand curve for a normal good?',
    options: [
      'A decrease in the unit price of the commodity itself',
      'An increase in consumers’ disposable household income',
      'An increase in the price of a complementary good',
      'An imposition of a specific excise tax on producers'
    ],
    correctIndex: 1,
    explanation: 'For a normal good, an increase in consumer disposable income increases purchasing power, causing the entire demand curve to shift outwards to the right at every price level.'
  },
  {
    id: 5,
    topic: 'Theory of Supply',
    question: 'According to the Law of Supply, other factors remaining constant (ceteris paribus):',
    options: [
      'Quantity supplied decreases as market price rises',
      'Quantity supplied increases as market price rises',
      'Supply shifts leftward whenever production technology advances',
      'Price and quantity supplied are inversely correlated'
    ],
    correctIndex: 1,
    explanation: 'The Law of Supply states that ceteris paribus, there is a direct (positive) relationship between price and quantity supplied: producers offer more goods as prices rise because profit margins expand.'
  },
  {
    id: 6,
    topic: 'Elasticity of Demand',
    question: 'If a 10% increase in the price of good X leads to a 25% drop in quantity demanded, the price elasticity of demand (PED) is:',
    options: [
      '0.4 (Inelastic)',
      '1.0 (Unitary Elastic)',
      '2.5 (Elastic)',
      '-0.4 (Perfectly Inelastic)'
    ],
    correctIndex: 2,
    explanation: 'PED = (% change in quantity demanded) / (% change in price) = 25% / 10% = 2.5. Since the coefficient is greater than 1, demand is price elastic.'
  },
  {
    id: 7,
    topic: 'Elasticity of Demand',
    question: 'Two goods, A and B, have a positive cross-price elasticity of demand (XED > 0). This proves that the two goods are:',
    options: [
      'Complementary goods (e.g., petrol and automobiles)',
      'Substitute goods (e.g., Milo and Ovaltine)',
      'Veblen luxury goods with conspicuous consumption',
      'Giffen goods defying the law of downward sloping demand'
    ],
    correctIndex: 1,
    explanation: 'A positive cross-elasticity of demand indicates that a price increase in one good causes an increase in demand for the other, which is the defining characteristic of substitute commodities.'
  },
  {
    id: 8,
    topic: 'Consumer Behaviour',
    question: 'The Law of Diminishing Marginal Utility postulates that:',
    options: [
      'Total utility decreases from the very first unit consumed',
      'Additional satisfaction derived declines as more units of a specific good are consumed',
      'Marginal utility equals price when a consumer runs into debt',
      'Total revenue rises indefinitely with each consecutive purchase'
    ],
    correctIndex: 1,
    explanation: 'The law states that as a consumer consumes additional units of a homogeneous good over a given timeframe, the extra satisfaction (marginal utility) derived from each successive unit decreases.'
  },
  {
    id: 9,
    topic: 'Consumer Behaviour',
    question: 'On an indifference curve map, the Marginal Rate of Substitution (MRS) is represented geometrically by:',
    options: [
      'The vertical intercept of the budget constraint line',
      'The slope of the indifference curve at any given point',
      'The intersection of the total utility and average utility curves',
      'The ratio of total nominal expenditure to consumer savings'
    ],
    correctIndex: 1,
    explanation: 'The slope of an indifference curve at any point equals the Marginal Rate of Substitution (MRS), which measures the rate at which a consumer is willing to give up good Y for an extra unit of good X while maintaining equal satisfaction.'
  },
  {
    id: 10,
    topic: 'Theory of Production',
    question: 'The Law of Diminishing Marginal Returns operates strictly in:',
    options: [
      'The short-run production period where at least one factor of production is fixed',
      'The long-run period when all factor inputs are completely variable',
      'Financial markets when central banks enforce negative interest rates',
      'Command economies where price ceilings are permanently maintained'
    ],
    correctIndex: 0,
    explanation: 'The law of diminishing returns is a short-run law: as successive units of a variable factor (e.g., labour) are added to a fixed factor (e.g., land or machinery), the marginal product of the variable factor eventually declines.'
  },
  {
    id: 11,
    topic: 'Theory of Costs',
    question: 'Which cost curve is characterized by a horizontal straight line representing a constant monetary sum regardless of output level?',
    options: [
      'Average Total Cost (ATC)',
      'Total Fixed Cost (TFC)',
      'Marginal Cost (MC)',
      'Average Variable Cost (AVC)'
    ],
    correctIndex: 1,
    explanation: 'Total Fixed Costs (TFC) do not vary with the level of output in the short run (e.g., factory rent, management salaries). Hence, its graph is a horizontal straight line parallel to the quantity axis.'
  },
  {
    id: 12,
    topic: 'Theory of Costs',
    question: 'Marginal Cost (MC) is best described mathematically and operationally as:',
    options: [
      'Total cost divided by total physical output',
      'The addition to total cost resulting from producing one extra unit of output',
      'The sum of fixed costs divided by the price of variable inputs',
      'The minimum point on the average revenue curve'
    ],
    correctIndex: 1,
    explanation: 'Marginal Cost is the change in total cost (or change in total variable cost) arising from producing one additional unit of output: MC = ΔTC / ΔQ.'
  },
  {
    id: 13,
    topic: 'Theory of Costs',
    question: 'When a firm experiences economies of scale, its Long-Run Average Cost (LRAC) curve is:',
    options: [
      'Upward sloping due to managerial bottleneck constraints',
      'Downward sloping as output expands',
      'Vertical at the minimum efficient scale',
      'Completely identical to the short-run marginal cost curve'
    ],
    correctIndex: 1,
    explanation: 'Internal economies of scale refer to cost advantages that arise with increased output scale, causing the Long-Run Average Cost curve to slope downward over that output range.'
  },
  {
    id: 14,
    topic: 'Market Structures',
    question: 'In a perfectly competitive market, an individual firm is described as a "price taker" because:',
    options: [
      'Its output is large enough to manipulate market equilibrium',
      'The demand curve facing the firm is perfectly price elastic (horizontal)',
      'The government fixes statutory minimum floor prices by decree',
      'Collusive cartels dictate the prevailing selling quotation'
    ],
    correctIndex: 1,
    explanation: 'Because a perfectly competitive firm sells a homogeneous product and constitutes an infinitesimally small fraction of the total market, it faces a perfectly horizontal demand curve (P = MR = AR) and must take the market price.'
  },
  {
    id: 15,
    topic: 'Market Structures',
    question: 'The profit-maximizing equilibrium condition for any profit-oriented firm, across all market structures, occurs where:',
    options: [
      'Average Revenue equals Average Cost (AR = AC)',
      'Marginal Revenue equals Marginal Cost (MR = MC), and MC cuts MR from below',
      'Price equals Total Fixed Cost divided by quantity',
      'Total Revenue reaches its minimum inflection point'
    ],
    correctIndex: 1,
    explanation: 'Universal equilibrium requires MR = MC with MC rising (cutting MR from below). If MR > MC, expanding production adds to profits; if MC > MR, the extra unit adds more to costs than revenues.'
  },
  {
    id: 16,
    topic: 'Market Structures',
    question: 'A pure monopolist is able to maintain supernormal (economic) profits even in the long run primarily because:',
    options: [
      'Demand for its product is always completely price inelastic',
      'Substantial barriers to entry prevent prospective competitor firms from entering',
      'Governments subsidize 100% of all capital depreciation expenses',
      'Monopolists produce where marginal cost drops to zero'
    ],
    correctIndex: 1,
    explanation: 'High barriers to entry (legal patents, economies of scale, resource ownership, heavy capital requirements) prevent new entrants from competing away long-run supernormal profits in a monopoly.'
  },
  {
    id: 17,
    topic: 'Market Structures',
    question: 'The kinked demand curve model was formulated by Paul Sweezy to explain:',
    options: [
      'Price rigidity and non-price competition in oligopolistic markets',
      'The erratic fluctuations in agricultural crop prices across seasons',
      'The behavior of consumers facing Giffen commodities',
      'The shift from public monopolies to privatized utility enterprises'
    ],
    correctIndex: 0,
    explanation: 'Sweezy’s kinked demand curve hypothesis illustrates oligopolistic price rigidity: if a firm increases price, rivals will not follow (elastic portion); if it cuts price, rivals will match the cut (inelastic portion).'
  },
  {
    id: 18,
    topic: 'National Income Accounting',
    question: 'Gross Domestic Product (GDP) differs from Gross National Product (GNP) by:',
    options: [
      'Net factor income from abroad (NFIA)',
      'Capital consumption allowances (depreciation)',
      'Total personal income taxes collected by the treasury',
      'Direct government transfers and unemployment subsidies'
    ],
    correctIndex: 0,
    explanation: 'GNP = GDP + Net Factor Income from Abroad (NFIA). GDP measures output within geographic borders, while GNP measures output produced by permanent national citizens regardless of geographic location.'
  },
  {
    id: 19,
    topic: 'National Income Accounting',
    question: 'Which of the following is deducted from Gross National Product (GNP) to arrive at Net National Product (NNP)?',
    options: [
      'Undistributed corporate profits',
      'Capital depreciation (consumption of fixed capital)',
      'Indirect business tariffs and customs duties',
      'Government welfare transfers to pensioners'
    ],
    correctIndex: 1,
    explanation: 'Net National Product (NNP) = Gross National Product (GNP) - Depreciation (Capital Consumption Allowance).'
  },
  {
    id: 20,
    topic: 'National Income Accounting',
    question: 'In measuring national income using the expenditure approach, which equation is standard in macroeconomics?',
    options: [
      'Y = C + I + G + (X - M)',
      'Y = Wages + Rent + Interest + Corporate Profits',
      'Y = Output of Agriculture + Manufacturing + Services',
      'Y = Money Supply × Velocity of Circulation'
    ],
    correctIndex: 0,
    explanation: 'Under the expenditure approach: Y = C (Consumption) + I (Investment) + G (Government Purchases) + (X - M) (Net Exports).'
  },
  {
    id: 21,
    topic: 'National Income Accounting',
    question: 'The problem of "double counting" in national income estimation is averted by using:',
    options: [
      'The nominal wholesale price index',
      'The value-added approach or counting final goods only',
      'The gross capital accumulation quotient',
      'Total intermediate transactions recorded in wholesale books'
    ],
    correctIndex: 1,
    explanation: 'Double counting occurs when intermediate products are counted at each production stage. It is prevented by either tallying only the values of final goods or calculating the value added at each intermediate phase.'
  },
  {
    id: 22,
    topic: 'Money and Banking',
    question: 'Which of the following is considered the primary and distinguishing function of money that overcomes the barter system?',
    options: [
      'Store of purchasing power over extended centuries',
      'Medium of exchange facilitating bilateral trade without double coincidence of wants',
      'Standard of deferred commercial payments',
      'Unit of denomination for international trade balances'
    ],
    correctIndex: 1,
    explanation: 'The primary role of money is serving as a medium of exchange, eliminating the crippling barter requirement for a "double coincidence of wants".'
  },
  {
    id: 23,
    topic: 'Money and Banking',
    question: 'Which monetary policy instrument involves the Central Bank of Nigeria (CBN) buying or selling government securities in the open market?',
    options: [
      'Cash Reserve Ratio (CRR)',
      'Open Market Operations (OMO)',
      'Liquidity Ratio requirement',
      'Moral Suasion circulars'
    ],
    correctIndex: 1,
    explanation: 'Open Market Operations (OMO) refers to the sale and purchase of treasury bills and government bonds by the Central Bank in the financial market to regulate liquidity and the money supply.'
  },
  {
    id: 24,
    topic: 'Money and Banking',
    question: 'To combat severe demand-pull inflation in Nigeria, the Central Bank of Nigeria would conventionally:',
    options: [
      'Reduce the Monetary Policy Rate (MPR) to lower borrowing costs',
      'Increase the Monetary Policy Rate (MPR) and raise the Cash Reserve Ratio (CRR)',
      'Purchase large volumes of sovereign treasury bills from commercial banks',
      'Lower statutory reserve requirements for deposit money banks'
    ],
    correctIndex: 1,
    explanation: 'A contractionary monetary stance to curb inflation entails raising the policy rate (MPR) and increasing reserve requirements (CRR), which discourages commercial lending and contracts overall credit creation.'
  },
  {
    id: 25,
    topic: 'Money and Banking',
    question: 'If a commercial bank receives a new deposit of ₦1,000,000 and the legal reserve requirement is 20%, the theoretical credit creation multiplier is:',
    options: [
      '2',
      '4',
      '5',
      '20'
    ],
    correctIndex: 2,
    explanation: 'Money Multiplier = 1 / Reserve Ratio = 1 / 0.20 = 5. The total potential deposit creation is ₦1,000,000 × 5 = ₦5,000,000.'
  },
  {
    id: 26,
    topic: 'Inflation and Deflation',
    question: 'Cost-push inflation is typically triggered in an economy by:',
    options: [
      'Excessive consumer spending financed by rapid money printing',
      'Sharp increases in the prices of critical inputs like fuel, wages, or imported raw materials',
      'Budget surpluses generated through fiscal prudence',
      'Substantial increases in domestic manufacturing productivity'
    ],
    correctIndex: 1,
    explanation: 'Cost-push inflation results from aggregate supply shocks that drive up unit production costs (such as surges in energy costs, currency depreciation raising import costs, or aggressive wage hikes).'
  },
  {
    id: 27,
    topic: 'Inflation and Deflation',
    question: 'Stagflation is an acute macroeconomic condition characterized simultaneously by:',
    options: [
      'Rapid GDP growth and declining general price levels',
      'High inflation accompanied by economic stagnation (high unemployment and low growth)',
      'A booming stock market combined with a balance of trade surplus',
      'Falling public debt alongside severe deflationary pressures'
    ],
    correctIndex: 1,
    explanation: 'Stagflation combines economic stagnation (sluggish output growth and high unemployment) with persistent price inflation, making policy remedies particularly challenging.'
  },
  {
    id: 28,
    topic: 'Public Finance and Fiscal Policy',
    question: 'A progressive income tax system is one in which:',
    options: [
      'Everyone pays the exact same percentage of income regardless of earnings',
      'Higher income earners pay a higher proportion (percentage) of their income in tax',
      'Lower income earners bear a proportionally larger percentage burden',
      'Tax liability is based entirely on the physical volume of consumption goods'
    ],
    correctIndex: 1,
    explanation: 'Under a progressive tax regime, the marginal tax rate increases as the taxable income base rises, which helps reduce income inequality across societal strata.'
  },
  {
    id: 29,
    topic: 'Public Finance and Fiscal Policy',
    question: 'Which of the following is classified as an indirect tax in Nigeria?',
    options: [
      'Personal Income Tax (PAYE)',
      'Companies Income Tax (CIT)',
      'Value Added Tax (VAT)',
      'Capital Gains Tax'
    ],
    correctIndex: 2,
    explanation: 'Value Added Tax (VAT) is an indirect consumption tax levied on goods and services at each stage of the supply chain. The burden can be shifted onto the final consumer.'
  },
  {
    id: 30,
    topic: 'Public Finance and Fiscal Policy',
    question: 'The four classical cannons of taxation originally enunciated by Adam Smith are:',
    options: [
      'Equality (equity), Certainty, Convenience, and Economy',
      'Progressivity, Elasticity, Productivity, and Secrecy',
      'Speed, Inflation-adjustment, Modernity, and Compulsion',
      'Diversification, Federalism, Subsidiarity, and Uniformity'
    ],
    correctIndex: 0,
    explanation: 'Adam Smith posited four maxims of taxation in The Wealth of Nations: Equity (ability to pay), Certainty (clear rules and dates), Convenience (collected when easiest for taxpayer), and Economy (low cost of collection).'
  },
  {
    id: 31,
    topic: 'Public Finance and Fiscal Policy',
    question: 'A fiscal budget deficit occurs when:',
    options: [
      'Government recurrent and capital expenditure exceeds its projected fiscal revenue',
      'National imports of merchandise exceed total visible exports',
      'Foreign direct investment is lower than domestic capital outflows',
      'The central bank prints excess currency without gold backing'
    ],
    correctIndex: 0,
    explanation: 'A budget deficit arises in a fiscal year when a government’s total expenditures outstrip the total revenues (taxes, oil receipts, fees) it generates, necessitating borrowing.'
  },
  {
    id: 32,
    topic: 'International Trade',
    question: 'David Ricardo’s Theory of Comparative Advantage asserts that countries gain from trade if they specialize in producing commodities in which they have:',
    options: [
      'The highest absolute productivity across all industrial sectors',
      'The lowest opportunity cost compared to trading partner nations',
      'Statutory export quotas protected by high retaliatory tariffs',
      'The largest domestic currency reserves and physical gold bullion'
    ],
    correctIndex: 1,
    explanation: 'Ricardo demonstrated that mutual gains from trade occur whenever nations specialize according to comparative advantage—meaning they specialize in goods with lower relative opportunity costs.'
  },
  {
    id: 33,
    topic: 'International Trade',
    question: 'The Balance of Payments (BOP) of a sovereign nation is best defined as:',
    options: [
      'The annual tax receipts collected from foreign multinational companies',
      'A systematic accounting record of all economic transactions between residents of a country and the rest of the world',
      'The net profits earned exclusively by the national flag carrier airline and shipping lines',
      'The total outstanding foreign loans owed to multilateral creditors like the IMF'
    ],
    correctIndex: 1,
    explanation: 'The Balance of Payments (BOP) is a statistical statement summarizing all financial and economic transactions between residents of a nation and foreign entities over a specific period.'
  },
  {
    id: 34,
    topic: 'International Trade',
    question: 'The Current Account in the Balance of Payments framework encompasses transactions involving:',
    options: [
      'Merchandise trade (visible), services (invisible), primary income, and current transfers',
      'Foreign Direct Investment (FDI) and long-term sovereign bond purchases',
      'Central bank foreign exchange reserves allocations and gold transfers',
      'Cross-border corporate mergers and international patents acquisition'
    ],
    correctIndex: 0,
    explanation: 'The Current Account records visible trade (goods), invisible trade (services like shipping, tourism, banking), investment income flows, and unilateral transfers (such as diaspora remittances).'
  },
  {
    id: 35,
    topic: 'International Trade',
    question: 'Currency devaluation under a fixed exchange rate system refers to:',
    options: [
      'An automatic drop in exchange value caused by open market demand and supply forces',
      'A deliberate, official downward adjustment of the domestic currency value against foreign currencies',
      'The withdrawal of high-denomination banknotes from circulation by the mint',
      'A sudden domestic deflation where internal price levels fall rapidly'
    ],
    correctIndex: 1,
    explanation: 'Devaluation is a deliberate government/central bank action lowering the official exchange value of its currency. (When market forces drive the drop in a floating regime, it is called depreciation).'
  },
  {
    id: 36,
    topic: 'International Trade',
    question: 'Terms of Trade (TOT) is calculated as:',
    options: [
      '(Index of Export Prices / Index of Import Prices) × 100',
      '(Total Value of Imports / Total Value of Exports) × 100',
      'Net Foreign Exchange Reserves divided by Gross Domestic Product',
      'Sovereign External Debt divided by Annual Government Revenue'
    ],
    correctIndex: 0,
    explanation: 'The commodity terms of trade index is expressed as (Px / Pm) × 100, where Px is the export price index and Pm is the import price index.'
  },
  {
    id: 37,
    topic: 'International Trade',
    question: 'A primary tariff barrier instituted to discourage the importation of non-essential luxury goods is:',
    options: [
      'An ad valorem or specific customs duty on imported merchandise',
      'An outright maritime embargo enforced by naval vessels',
      'A domestic production subsidy disbursed to local farmers',
      'A requirement for foreign exporters to speak indigenous languages'
    ],
    correctIndex: 0,
    explanation: 'Tariffs are taxes or customs duties levied on imported goods, making them more expensive in domestic markets and thereby discouraging imports while generating fiscal revenue.'
  },
  {
    id: 38,
    topic: 'Economic Growth and Development',
    question: 'The fundamental difference between economic growth and economic development is that:',
    options: [
      'Growth is qualitative while development is strictly quantitative',
      'Growth is purely a quantitative expansion of real output, while development encompasses structural, institutional, and living standard improvements',
      'Growth applies only to industrialized nations while development applies only to agrarian economies',
      'Development occurs automatically without any government policy or social infrastructure'
    ],
    correctIndex: 1,
    explanation: 'Economic growth is a quantitative rise in real GDP/GNP. Economic development is multidimensional, incorporating poverty reduction, literacy, healthcare, institutional quality, and overall human welfare.'
  },
  {
    id: 39,
    topic: 'Economic Growth and Development',
    question: 'The United Nations Human Development Index (HDI) is constructed using three principal dimensions:',
    options: [
      'Long and healthy life, knowledge (education), and a decent standard of living (GNI per capita)',
      'Crude oil production, military expenditure, and physical road density',
      'Foreign exchange reserves, stock market capitalization, and gold bullion',
      'Annual tax revenue, birth rate, and telephone subscriptions'
    ],
    correctIndex: 0,
    explanation: 'The HDI measures human development across three dimensions: life expectancy at birth (health), mean/expected years of schooling (education), and GNI per capita at PPP (standard of living).'
  },
  {
    id: 40,
    topic: 'Economic Growth and Development',
    question: 'According to W.W. Rostow’s Stages of Economic Growth, which stage is marked by rapid, self-sustaining industrial expansion and a rise in investment rates?',
    options: [
      'The Traditional Society',
      'The Pre-conditions for Take-off',
      'The Take-off Stage',
      'The Age of High Mass Consumption'
    ],
    correctIndex: 2,
    explanation: 'In Rostow’s theory, the "Take-off" stage represents a dynamic breakthrough where modern technology spreads, investment rates increase, and self-sustained industrial growth is initiated.'
  },
  {
    id: 41,
    topic: 'Population Economics',
    question: 'The classical population doctrine propounded by Thomas Robert Malthus in 1798 asserted that:',
    options: [
      'Food supply increases exponentially while human population increases linearly',
      'Population tends to grow in geometric progression while food production grows in arithmetic progression',
      'Urbanization naturally resolves all agricultural supply bottlenecks',
      'Industrial automation guarantees permanent food surpluses for all mankind'
    ],
    correctIndex: 1,
    explanation: 'Malthus argued that population unchecked multiplies geometrically (1, 2, 4, 8, 16...), whereas subsistence food supplies increase only arithmetically (1, 2, 3, 4, 5...), leading to inevitable famine and misery unless checked.'
  },
  {
    id: 42,
    topic: 'Population Economics',
    question: 'The optimum population of a country is defined as the population size that:',
    options: [
      'Matches the exact geographic land mass in square kilometres',
      'Maximizes real output per head (per capita income) given existing resources and technology',
      'Ensures the birth rate is equal to the crude death rate',
      'Eliminates all cross-border labour migration completely'
    ],
    correctIndex: 1,
    explanation: 'Optimum population is the point where the existing population combined with available resources and technological state yields the highest output per head (maximum per capita income).'
  },
  {
    id: 43,
    topic: 'Population Economics',
    question: 'A country with a high dependency ratio typically has a large proportion of its population:',
    options: [
      'Employed in modern manufacturing and export shipping',
      'Composed of children below 15 years and elderly citizens above 65 years',
      'Holding post-secondary teacher training certificates',
      'Serving in the standing armed forces and diplomatic missions'
    ],
    correctIndex: 1,
    explanation: 'The dependency ratio compares the economically inactive dependents (children under 15 and elderly over 65) against the working-age population (15 to 64).'
  },
  {
    id: 44,
    topic: 'Nigerian Economy',
    question: 'The Nigerian economy before the commercial discovery of crude oil at Oloibiri in 1956 was heavily reliant on:',
    options: [
      'Exportation of cash crops such as cocoa, groundnut pyramids, palm oil, and rubber',
      'The manufacturing of computer microprocessors and heavy automobiles',
      'Exportation of liquefied natural gas and petrochemical fertilizers',
      'Gold and diamond open-pit mining in the Niger Delta'
    ],
    correctIndex: 0,
    explanation: 'Prior to the crude oil boom of the 1970s, Nigeria’s revenue and foreign exchange were anchored on agriculture: groundnut pyramids in Kano, cocoa in the Western Region, and palm produce in the Eastern Region.'
  },
  {
    id: 45,
    topic: 'Nigerian Economy',
    question: 'The structural economic challenge where a boom in the natural resource sector (e.g. oil) leads to exchange rate appreciation and harms other sectors (e.g. agriculture) is known as:',
    options: [
      'Dutch Disease',
      'The Keynesian Liquidity Trap',
      'Say’s Law of Markets',
      'The Giffen Paradox'
    ],
    correctIndex: 0,
    explanation: 'Dutch Disease describes how a resource boom draws capital and labor away from non-resource sectors, while appreciating the real exchange rate, which undermines the international competitiveness of agriculture and manufacturing.'
  },
  {
    id: 46,
    topic: 'Nigerian Economy',
    question: 'In 1986, the Nigerian military government under Ibrahim Babangida introduced the Structural Adjustment Programme (SAP) primarily aimed at:',
    options: [
      'Nationalizing all foreign oil concessions and establishing price controls',
      'Promoting economic deregulation, exchange rate rationalization, and agricultural export stimulation',
      'Pegging the Naira to the British Pound Sterling permanently',
      'Abolishing personal income tax for all civil servants'
    ],
    correctIndex: 1,
    explanation: 'The 1986 SAP was introduced with IMF/World Bank support to address balance of payments deficits, deregulate trade and the exchange rate, reduce public subsidies, and incentivize domestic production.'
  },
  {
    id: 47,
    topic: 'Nigerian Economy',
    question: 'Nasarawa State, often celebrated as Nigeria’s "Home of Solid Minerals", has significant potential to diversify the economy through commercial deposits of:',
    options: [
      'Barite, columbite, tantalite, coal, and limestone',
      'Deep offshore crude petroleum reservoirs',
      'Rich synthetic sapphire and diamond pipelines',
      'Uranium enrichment and industrial silicon crystals'
    ],
    correctIndex: 0,
    explanation: 'Nasarawa State is endowed with vast solid minerals including barite, tantalite, columbite, lead-zinc, coal, and limestone, playing a vital role in national mineral diversification.'
  },
  {
    id: 48,
    topic: 'Nigerian Economy',
    question: 'The African Continental Free Trade Area (AfCFTA) aims to foster intra-African commerce by:',
    options: [
      'Establishing a single unified continental military defense alliance',
      'Progressively eliminating tariff and non-tariff barriers on goods and services across member states',
      'Enforcing mandatory migration of all manufacturing industries to North Africa',
      'Restricting trade exclusively to agricultural raw commodities'
    ],
    correctIndex: 1,
    explanation: 'AfCFTA creates a single continent-wide market for goods and services, aiming to dismantle tariffs on 90% of goods and reduce non-tariff hurdles to foster regional value chains.'
  },
  {
    id: 49,
    topic: 'Market Structures',
    question: 'In price discrimination of the third degree, a monopolist separates markets and charges different prices based on differences in:',
    options: [
      'The geographic latitude of buyer warehouses',
      'Price elasticity of demand between distinct consumer sub-markets',
      'The physical packaging color preferred by customers',
      'Statutory minimum wage regulations across regional councils'
    ],
    correctIndex: 1,
    explanation: 'Third-degree price discrimination relies on segmenting markets with different price elasticities of demand: charging a higher price where demand is relatively inelastic and a lower price where demand is elastic.'
  },
  {
    id: 50,
    topic: 'Theory of Demand',
    question: 'A Giffen good is a special type of inferior good for which:',
    options: [
      'A rise in price causes an increase in quantity demanded because the negative income effect outweighs the substitution effect',
      'Cross elasticity of demand with all other substitutes is equal to zero',
      'Demand drops to zero when consumer disposable income doubles',
      'The demand curve is perfectly horizontal'
    ],
    correctIndex: 0,
    explanation: 'For a Giffen good, when price rises, the negative income effect (making the poor consumer poorer) is so strong that it overpowers the substitution effect, causing quantity demanded to rise.'
  },
  {
    id: 51,
    topic: 'Macroeconomic Theories',
    question: 'Keynesian economic theory contends that during a deep macroeconomic recession, the primary driver for recovery is:',
    options: [
      'Relying solely on wage cuts to restore full employment equilibrium',
      'Deliberate government expansion of aggregate demand through fiscal stimulus and public works spending',
      'Prohibiting commercial bank credit creation and increasing reserve requirements',
      'Allowing spontaneous market self-correction without public sector involvement'
    ],
    correctIndex: 1,
    explanation: 'John Maynard Keynes argued that during downturns, prices and wages are sticky downwards, leading to insufficient aggregate demand. Counter-cyclical government spending is required to stimulate economic activity.'
  },
  {
    id: 52,
    topic: 'Macroeconomic Theories',
    question: 'The Phillips Curve in traditional short-run macroeconomic analysis demonstrates an inverse empirical relationship between:',
    options: [
      'The rate of inflation and the rate of unemployment',
      'The level of public debt and the foreign trade deficit',
      'Real GDP per capita and the infant mortality index',
      'The supply of high-powered money and the exchange rate'
    ],
    correctIndex: 0,
    explanation: 'The short-run Phillips curve shows a trade-off: lower unemployment is associated with higher rates of wage and price inflation, and vice versa.'
  },
  {
    id: 53,
    topic: 'National Income Accounting',
    question: 'The Marginal Propensity to Consume (MPC) plus the Marginal Propensity to Save (MPS) is always mathematically equal to:',
    options: [
      '0',
      '0.5',
      '1',
      '100'
    ],
    correctIndex: 2,
    explanation: 'Because every additional unit of disposable income (ΔY) must either be spent on consumption (ΔC) or saved (ΔS), ΔC/ΔY + ΔS/ΔY = MPC + MPS = 1.'
  },
  {
    id: 54,
    topic: 'Public Finance and Fiscal Policy',
    question: 'Which of the following describes an expansionary fiscal policy measure?',
    options: [
      'Increasing personal and corporate income tax rates while cutting infrastructure budgets',
      'Increasing government spending on capital projects while lowering direct tax burdens',
      'The central bank raising the Monetary Policy Rate (MPR)',
      'Imposing an embargo on all commercial agricultural imports'
    ],
    correctIndex: 1,
    explanation: 'Expansionary fiscal policy boosts aggregate demand by injecting funds through increased government spending and/or reducing taxes to leave more disposable income with households and firms.'
  },
  {
    id: 55,
    topic: 'International Trade',
    question: 'Dumping in international economic trade occurs when a foreign manufacturer:',
    options: [
      'Disposes of toxic industrial chemical effluents in territorial ocean waters',
      'Sells a product in a foreign market at a price below its domestic production cost or domestic market price',
      'Refuses to accept payments in internationally recognized reserve currencies',
      'Smuggles counterfeit currency into a recipient trading nation'
    ],
    correctIndex: 1,
    explanation: 'Dumping is a form of predatory pricing where an exporter sells goods abroad at prices below domestic market prices or below production cost, often to drive out local competitors.'
  },
  {
    id: 56,
    topic: 'Theory of Production',
    question: 'The reward or factor payment accrued to the entrepreneurial factor of production is:',
    options: [
      'Economic Rent',
      'Wages and Salaries',
      'Profit (or loss)',
      'Contractual Interest'
    ],
    correctIndex: 2,
    explanation: 'The four factors of production and their rewards are: Land -> Rent, Labour -> Wages/Salaries, Capital -> Interest, and Entrepreneurship -> Profit.'
  },
  {
    id: 57,
    topic: 'Theory of Demand',
    question: 'When demand for two goods is interrelated because one cannot be utilized without the other (e.g., car and petrol), they are in:',
    options: [
      'Competitive demand',
      'Joint or complementary demand',
      'Derived demand',
      'Composite demand'
    ],
    correctIndex: 1,
    explanation: 'Joint (complementary) demand occurs when two or more commodities are required together to satisfy a single want (e.g., pen and ink, camera and film).'
  },
  {
    id: 58,
    topic: 'Theory of Demand',
    question: 'The demand for factors of production (such as factory labour or industrial machinery) is known as:',
    options: [
      'Autonomous demand',
      'Derived demand',
      'Composite demand',
      'Veblen luxury demand'
    ],
    correctIndex: 1,
    explanation: 'Factors of production are not demanded for their own direct utility, but because of the final consumer goods they help produce; thus, their demand is derived.'
  },
  {
    id: 59,
    topic: 'Theory of Costs',
    question: 'In the short run, when the Marginal Cost (MC) is less than the Average Total Cost (ATC):',
    options: [
      'Average Total Cost must be falling as output increases',
      'Average Total Cost must be rising rapidly',
      'Average Fixed Cost is equal to zero',
      'Total Variable Cost is at its absolute maximum'
    ],
    correctIndex: 0,
    explanation: 'Whenever marginal cost is lower than average cost, it pulls the average downward; when MC is higher than ATC, it pulls the average upward. Hence, MC intersects ATC at its minimum point.'
  },
  {
    id: 60,
    topic: 'Public Finance and Fiscal Policy',
    question: 'Which of the following represents a non-tax source of revenue for the Federal Government of Nigeria?',
    options: [
      'Customs and Excise import duties',
      'Petroleum Profit Tax (PPT)',
      'Dividends from state-owned enterprises and mining concession royalties',
      'Stamp duties on bank transactions'
    ],
    correctIndex: 2,
    explanation: 'Non-tax public revenue includes dividends from government equity holdings (e.g., NNPC Ltd), concession fees, royalties, administrative fines, licences, and privatization proceeds.'
  },
  {
    id: 61,
    topic: 'Nigerian Economy',
    question: 'The apex regulatory agency overseeing the Nigerian capital market and protecting investors on the securities exchange is the:',
    options: [
      'Securities and Exchange Commission (SEC)',
      'Federal Inland Revenue Service (FIRS)',
      'Nigeria Deposit Insurance Corporation (NDIC)',
      'Standards Organisation of Nigeria (SON)'
    ],
    correctIndex: 0,
    explanation: 'The Securities and Exchange Commission (SEC) is the statutory regulatory body of the Nigerian capital market, while the CBN oversees the money market.'
  },
  {
    id: 62,
    topic: 'Basic Economic Concepts',
    question: 'A scale of preference is a list of an individual’s or household’s unsatisfied wants arranged in order of:',
    options: [
      'Their chronological date of origin',
      'Relative priority and importance to the consumer',
      'Total monetary cash outlay required for purchase',
      'Alphabetical order according to retail catalogue listings'
    ],
    correctIndex: 1,
    explanation: 'A scale of preference arranges wants in descending order of urgency/importance, enabling the rational decision maker to allocate limited resources effectively to satisfy the most pressing wants first.'
  }
];
