const categories = [
  {
    id: "leading-national-academies",
    number: "01",
    title: "Leading National Academies",
    shortTitle: "Leading Academies",
    accent: "#1d5b4f",
    icon: "landmark",
    definition:
      "A national academy is an independent or nationally recognized learned body that elects distinguished experts for exceptional contributions to science, engineering, medicine, scholarship, or public service. Membership or fellowship is typically one of the highest forms of peer recognition in a country or discipline.",
    criteria: [
      "Election, fellowship, or membership is highly selective and conferred by an academy.",
      "Recognition carries broad national prestige beyond a single university or employer.",
      "The distinction is primarily honorific, even when it also supports policy, advice, or service."
    ],
    items: [
      {
        organization: "US National Academy of Sciences (NAS)",
        recognition: "Member",
        website: "https://www.nasonline.org",
        bodyProfile: {
          officialName: "National Academy of Sciences",
          organizationType:
            "Private, nonprofit / nongovernmental, but congressionally chartered and nationally recognized.",
          definition:
            "A U.S. national academy whose members are elected in recognition of distinguished and continuing achievements in original research.",
          historyBackground:
            "Established in 1863 by an Act of Congress signed by President Abraham Lincoln. It was created as a private, nongovernmental institution to advise the nation on science and technology.",
          purpose:
            "To recognize leading scientists and provide independent advice on issues related to science and technology.",
          mission: "To promote science for the public good and advise the nation on science and technology.",
          governanceLeadership:
            "Governed by a 17-member Council, including five officers and 12 councilors elected from the Academy membership. The NAS president is Marcia McNutt.",
          scopeReach:
            "Broad science fields, including physical and mathematical sciences, biological sciences, engineering and applied sciences, biomedical sciences, behavioral and social sciences, and applied biological, agricultural, and environmental sciences."
        },
        criteriaProfiles: {
          Member: {
            "Official Name": "National Academy of Sciences",
            "Institution/Type": "National academy.",
            Definition:
              "A U.S. national academy whose members are elected in recognition of distinguished and continuing achievements in original research.",
            "History/Background":
              "Established in 1863 by an Act of Congress signed by President Abraham Lincoln. It was created as a private, nongovernmental institution to advise the nation on science and technology.",
            Purpose:
              "To recognize leading scientists and provide independent advice on issues related to science and technology.",
            "Awarding Body":
              "The National Academy of Sciences itself; new members are elected by current members.",
            "Organization Type":
              "Private, nonprofit / nongovernmental, but congressionally chartered and nationally recognized.",
            Mission: "To promote science for the public good and advise the nation on science and technology.",
            Leadership:
              "Governed by a 17-member Council, including five officers and 12 councilors elected from the Academy membership. The NAS president is Marcia McNutt.",
            "Committee/Jury Composition":
              "The election process is member-driven. Formal nominations are submitted by Academy members, reviewed through Academy election procedures, and voted on by members. Exact committee details are not fully public.",
            "Main Field/Scope":
              "Broad science fields, including physical and mathematical sciences, biological sciences, engineering and applied sciences, biomedical sciences, behavioral and social sciences, and applied biological, agricultural, and environmental sciences.",
            "Geographic Scope": "National, United States, with a separate category for international members.",
            "Geographic Distribution":
              "No clear public quota by region found. NAS has U.S. members and international members, but selection is based on scientific achievement rather than stated geographic quotas.",
            "Amount of Members":
              "As of the 2026 election announcement, NAS had 2,705 active members and 557 international members.",
            "Type of Recognition":
              "Elected membership in NAS; considered one of the highest honors a scientist can receive.",
            "Nomination Process":
              "Not an open application. Candidates are formally nominated by existing Academy members and elected by current members.",
            "Review/Evaluation Criteria":
              "Distinguished and continuing achievements in original research; outstanding achievement and commitment to service.",
            "Nomination Deadline":
              "NAS does not present this as a public open-application deadline. Elections are annual; results are usually announced after the annual election cycle.",
            "Application Requirements":
              "Not an applicant-submitted process. A PNAS description of the election pathway says formal nominations include a brief CV, a 250-word statement of scientific accomplishments, and a list of no more than 12 publications.",
            "Eligibility/Restrictions":
              "Membership is for scientists with distinguished original research. U.S. citizens are elected as members; non-U.S. citizens may be elected as international members. International members have different voting and office-holding rights under NAS bylaws.",
            Frequency:
              "Annual election cycle. In 2026, NAS elected 120 members and 25 international members.",
            Duration:
              "Generally a lifetime honor / membership status, unless changed by resignation or other membership status rules. NAS bylaws mention resignation procedures.",
            "Prize Money/Material Award":
              "No regular prize money is attached to NAS membership. It is primarily an honorary elected membership.",
            "Number of Recipients": "In 2026, NAS elected 120 new members and 25 international members.",
            "Notable Past Recipients":
              "Around 200 NAS members have received Nobel Prizes. Examples of NAS members include Jennifer Doudna, Frances Arnold, Katalin Kariko, Carolyn Bertozzi, Geoffrey Hinton, Yann LeCun, Judea Pearl, Barbara Liskov, Terence Tao, and Peter Shor. NAS membership recognizes distinguished and continuing achievements in original research.",
            "Career Impact/Outcomes":
              "NAS membership is a major prestige signal and is widely accepted as a mark of excellence in science, but NAS does not provide a simple career-impact statistic such as citation boost or promotion rate.",
            "Relationship to Other Awards":
              "Not a formal prerequisite for other awards, but many NAS members have also received major honors such as Nobel Prizes.",
            "Ranking/Prestige Signal":
              "Very high. Election to NAS is considered one of the highest honors a scientist can receive. Level 1A in the portal framework."
          }
        }
      },
      { organization: "US National Academy of Engineering (NAE)", recognition: "Member; International Member", website: "https://www.nae.edu" },
      { organization: "US National Academy of Medicine (NAM)", recognition: "Member", website: "https://nam.edu" },
      { organization: "The Royal Society (UK)", recognition: "Fellow; Foreign Member; Royal Society Milner Award", website: "https://royalsociety.org" },
      { organization: "Royal Academy of Engineering (UK)", recognition: "Fellow; Royal Academy of Engineering Whittle Medal", website: "https://raeng.org.uk" },
      { organization: "Academy of Medical Sciences (UK)", recognition: "Fellow", website: "https://acmedsci.ac.uk" }
    ]
  },
  {
    id: "other-national-academies",
    number: "02",
    title: "Other National Academies",
    shortTitle: "Other Academies",
    accent: "#2f5d7c",
    icon: "columns",
    definition:
      "Other national academies are country-level learned bodies, institutes, or academy systems that recognize scholarly, scientific, engineering, medical, or professional excellence outside the leading academy group used in this portal.",
    criteria: [
      "The body is national in identity or mandate.",
      "Membership or fellowship is awarded through nomination, election, appointment, or formal selection.",
      "The academy may be discipline-specific, emerging, regional within a nation, or smaller in global visibility."
    ],
    items: [
      {
        organization: "Academia Europaea",
        recognition: "Member",
        website: "https://www.ae-info.org",
        logoUrl: "https://www.clipartkey.com/mpngs/m/166-1660711_academia-europaea-logo.png"
      },
      { organization: "Leopoldina (German National Academy of Sciences)", recognition: "Member", website: "https://www.leopoldina.org" },
      {
        organization: "Chinese Academy of Sciences",
        recognition: "Member; Foreign Member",
        note: "State owned",
        website: "https://english.cas.cn",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/d/de/Seal_of_the_Chinese_Academy_of_Sciences.png",
        logoFit: "cover-top"
      },
      { organization: "Chinese Academy of Engineering", recognition: "Member", note: "State owned", website: "https://www.cae.cn" },
      { organization: "French Academy of Sciences", recognition: "Member; Orange Prize / French Academy Grand Prix", note: "State sponsored, Institut de France", website: "https://www.academie-sciences.fr" },
      { organization: "Swiss Academy of Engineering Sciences", recognition: "Member", note: "Funded by Swiss government", website: "https://www.satw.ch" },
      { organization: "Canadian Academy of Engineering", recognition: "Fellow", note: "Registered charity", website: "https://www.cae-acg.ca" },
      { organization: "Australian Academy of Science", recognition: "Fellow", note: "Registered charity", website: "https://www.science.org.au" },
      { organization: "Indian National Academy of Engineering", recognition: "Member; Fellow / Foreign Fellow", note: "Supported by government", website: "https://www.inae.in" },
      {
        organization: "MBR Academy of Scientists of the UAE",
        recognition: "Member",
        website: "https://mbras.ae",
        logoUrl: "assets/mbr-academy-scientists-logo.png"
      },
      { organization: "Young Israeli Academy of Sciences", recognition: "Member", website: "https://www.young.academy.ac.il" },
      {
        organization: "Australian Academy of Technological Sciences and Engineering (ATSE)",
        recognition: "Fellow",
        website: "https://www.atse.org.au",
        logoUrl: "assets/atse-logo.png"
      },
      { organization: "German National Academy of Science and Engineering (acatech)", recognition: "Member", website: "https://www.acatech.de" },
      { organization: "Berlin-Brandenburg Academy of Sciences and Humanities", recognition: "Member", website: "https://www.bbaw.de" },
      {
        organization: "Science Council of Japan",
        recognition: "Associate Member",
        website: "https://www.scj.go.jp",
        logoUrl: "assets/science-council-japan-logo.png"
      },
      {
        organization: "Serbian Royal Academy / SKANU",
        recognition: "Member",
        logoUrl: "assets/serbian-royal-academy-logo.png",
        logoFit: "wide"
      },
      { organization: "Academy of Engineering Sciences of Serbia", recognition: "Foreign Member", website: "https://ains.rs" },
      { organization: "World Academy of Art and Science (WAAS)", recognition: "Fellow", website: "https://worldacademy.org" },
      { organization: "The World Academy of Sciences (TWAS)", recognition: "Fellow", website: "https://twas.org" },
      { organization: "American Academy of Arts and Sciences", recognition: "Fellow", website: "https://www.amacad.org" },
      { organization: "Italian Academy of Engineering and Technology", recognition: "Member", website: "https://www.aiti.it" },
      { organization: "Academy of Motion Picture Arts and Sciences (AMPAS)", recognition: "Member", website: "https://www.oscars.org" }
    ]
  },
  {
    id: "professional-and-scholarly-associations",
    number: "03",
    title: "Professional and Scholarly Associations",
    shortTitle: "Associations",
    accent: "#5f6f2f",
    icon: "network",
    definition:
      "Draft scope: recognition from discipline-based societies and scholarly associations, including fellow status, distinguished member status, awards, presidencies, boards, and major committee leadership.",
    criteria: [
      "The organization represents a field, discipline, profession, or scholarly community.",
      "The distinction is tied to peer recognition, service, leadership, or sustained achievement.",
      "Examples may include fellow grades, society awards, elected leadership, and named lectureships."
    ],
    items: [
      {
        organization: "IEEE (Institute of Electrical and Electronics Engineers)",
        website: "https://www.ieee.org",
        recognition:
          "IEEE Fellow; IEEE John von Neumann Medal; IEEE W. Wallace McDowell Award; IEEE Robotics and Automation Society RAS Pioneer Award; Helmholtz Prize (ICCV Test-of-Time)"
      },
      {
        organization: "ACM (Association for Computing Machinery)",
        website: "https://www.acm.org",
        logoUrl: "assets/acm-logo.svg",
        recognition: "ACM Fellow; ACM A.M. Turing Award; ACM/AAAI Allen Newell Award",
        bodyProfileRows: [
          { field: "Official Name", value: "Association for Computing Machinery, usually abbreviated as ACM." },
          { field: "Category / Type", value: "Professional and scientific membership society for computing." },
          {
            field: "Definition",
            value:
              "ACM is a global computing society that brings together computing educators, researchers, and professionals to share resources, publish research, organize conferences, support professional development, and recognize technical excellence."
          },
          {
            field: "History / Background",
            value:
              "ACM was founded in 1947 and is described by ACM as the world's largest educational and scientific computing society."
          },
          {
            field: "Purpose",
            value:
              "To advance computing as a science and profession through publications, conferences, education, public policy, professional development, standards, and recognition programs. ACM states that it delivers resources that advance computing as a science and profession."
          },
          {
            field: "Awarding Body",
            value:
              "ACM itself is the awarding body for ACM awards and recognitions, including ACM Fellow and the Turing Award. The Allen Newell Award is jointly associated with ACM and AAAI."
          },
          { field: "Organization Type", value: "Nonprofit professional/scientific society." },
          {
            field: "Mission",
            value:
              "ACM's mission is centered on advancing computing as a science and profession; it also supports publications, conferences, education, public policy, professional growth, and recognition of excellence."
          },
          {
            field: "Leadership",
            value:
              "ACM is volunteer-led and member-driven. Yannis Ioannidis is ACM President for the 2024-2026 term, according to ACM-related election announcements."
          },
          {
            field: "Committee / Jury Composition",
            value:
              "ACM has awards committees and a Fellows Committee; detailed size and selection process vary by award and should be verified from the relevant ACM committee page."
          },
          {
            field: "Main Field / Scope",
            value:
              "Computing, computer science, information technology, AI, software, systems, theory, HCI, data, security, education, and related computing subfields."
          },
          {
            field: "Geographic Scope",
            value:
              "Global / international. ACM states that more than half of its more than 100,000 members reside outside the U.S."
          },
          {
            field: "Geographic Distribution",
            value:
              "Global membership, chapters, councils, conferences, and SIGs; no quota system identified in the sources reviewed."
          },
          { field: "Amount of Members", value: "More than 100,000 members globally, according to ACM." },
          {
            field: "Type of Recognition",
            value:
              "ACM administers major awards, fellowships, distinguished member grades, publications, conferences, and professional recognitions."
          },
          {
            field: "Prestige Signal",
            value:
              "Very high in computing. ACM's awards include the Turing Award, often described as computing's highest honor, and ACM Fellow, its most prestigious member grade."
          },
          {
            field: "Framework Classification",
            value:
              "ACM: governing / awarding institution. ACM Fellow: Level 2 - major society fellowship. ACM A.M. Turing Award: Level 1A - apex global prize. ACM/AAAI Allen Newell Award: Level 1C - elite field-specific prize."
          }
        ],
        criteriaProfiles: {
          "ACM Fellow": {
            "Official Name": "ACM Fellow",
            "Institution/Type": "Professional fellowship / senior membership distinction.",
            Definition:
              "ACM Fellow is ACM's most prestigious member grade, recognizing the top 1% of ACM members for outstanding accomplishments in computing and information technology and/or outstanding service to ACM and the computing community.",
            "History/Background":
              "ACM Fellow is a long-running recognition program for senior contributors to computing. ACM's recent Fellows pages list annual cohorts and describe the program as recognizing career-long contributions.",
            Purpose:
              "To recognize ACM professional members whose technical, professional, leadership, or service contributions have had significant and lasting impact on computing.",
            "Awarding Body": "ACM.",
            "Organization Type": "Professional/scientific society.",
            Mission:
              "Recognizes individuals who have significantly contributed to ACM's mission and to the broader computing field.",
            Leadership: "Managed through ACM's awards and Fellows structure; ACM is volunteer-led and member-driven.",
            "Committee/Jury Composition":
              "The ACM Fellows Committee reviews nominations. ACM states that nominations are reviewed by a distinguished selection committee, but committee size/selection process should be verified from the current committee page.",
            "Main Field/Scope":
              "Computing and information technology broadly, including research, systems, AI, software, education, HCI, security, and service to the field.",
            "Geographic Scope": "Global / international among ACM members.",
            "Geographic Distribution":
              "No formal regional quota found. ACM notes recent Fellow cohorts include universities, corporations, and research centers across multiple countries.",
            "Amount of Members": "ACM Fellow recognizes the top 1% of ACM members; ACM has more than 100,000 members globally.",
            "Type of Recognition": "Lifetime professional distinction / elite member grade.",
            "Nomination Process":
              "Peer nomination and annual review. ACM Fellow nominations are reviewed annually, and the nominator and endorsers must be ACM professional members.",
            "Review/Evaluation Criteria":
              "Candidates must show sustained contributions over time, clear impact beyond their own organization, and lasting influence through technical and/or leadership contributions.",
            "Nomination Deadline": "Next listed deadline: September 7, 2026, end of day, Anywhere on Earth.",
            "Application Requirements":
              "Nomination package submitted by a nominator with endorsements. Exact document count and format should be verified from ACM's current nomination form/guidelines.",
            "Eligibility/Restrictions":
              "Candidate must have at least 5 years of professional ACM membership in the last 10 years and sustained impact beyond their own organization. Nominator and endorsers must be professional ACM members at the time of nomination.",
            Frequency: "Annual.",
            Duration: "Lifetime / career-long recognition.",
            "Prize Money/Material Award":
              "No prize money identified in the ACM Fellow source; it is primarily a professional distinction/member grade.",
            "Number of Recipients": "Limited to the top 1% of ACM members. ACM named 55 Fellows in 2024.",
            "Notable Past Recipients":
              "Many leading figures in computing; examples should be pulled from the ACM Fellows database depending on field focus.",
            "Career Impact/Outcomes":
              "Strong recognition signal for senior computing researchers and practitioners. It supports reputation, leadership credibility, and field standing, but specific career-advancement statistics were not found in the reviewed sources.",
            "Relationship to Other Awards":
              "Distinct from the Turing Award; often appears alongside other senior honors in academic profiles.",
            "Ranking/Prestige Signal":
              "Level 2 major society fellowship in the hybrid framework; high prestige within the computing profession, but below apex global prizes like the Turing Award."
          },
          "ACM A.M. Turing Award": {
            "Official Name": "ACM A.M. Turing Award",
            "Institution/Type": "Global field-defining prize in computing.",
            Definition:
              "ACM's oldest and most prestigious award, presented annually to an individual who has made lasting technical contributions to the computing community.",
            "History/Background":
              "Named after Alan M. Turing, the British mathematician who helped articulate the mathematical foundations of computing. The award is often referred to as the \"Nobel Prize in Computing.\"",
            Purpose: "To recognize foundational, lasting, and trend-setting technical achievements in computing.",
            "Awarding Body": "ACM.",
            "Organization Type": "Professional/scientific society.",
            Mission: "Represents ACM's highest form of recognition for technical excellence in computing.",
            Leadership: "Administered through ACM's awards program.",
            "Committee/Jury Composition":
              "ACM's Turing Award FAQ states that each year a committee of ACM members determines the awardee(s) based on nominations and established criteria; committee members serve fixed, staggered five-year terms.",
            "Main Field/Scope":
              "Computer science / computing broadly. Includes AI, systems, theory, algorithms, programming languages, databases, graphics, security, HCI, and other computing areas.",
            "Geographic Scope": "Global / international.",
            "Geographic Distribution": "No regional quota identified. Award is based on technical contribution and field impact.",
            "Amount of Members":
              "Not applicable as a membership award; ACM membership is not required for recipients. ACM's FAQ states there is no ACM membership requirement to receive the Turing Award.",
            "Type of Recognition": "Global prize / highest computing honor.",
            "Nomination Process":
              "Nomination submitted through ACM's online nomination form. The most appropriate nominator is described as a recognized community member, ideally not from the same organization as the candidate.",
            "Review/Evaluation Criteria":
              "There should be an outstanding, trend-setting technical achievement that forms the principal claim to the award, with clear evidence of lasting impact.",
            "Nomination Deadline": "Next listed deadline: December 15, 2026, end of day, Anywhere on Earth.",
            "Application Requirements":
              "Nomination statement of 500-1000 words, candidate CV, suggested citation, and supporting letters from at least 4 and not more than 8 endorsers.",
            "Eligibility/Restrictions":
              "No ACM membership requirement. Members of the ACM award committee are not eligible during their term of service.",
            Frequency: "Annual.",
            Duration: "One-time award, lifetime prestige.",
            "Prize Money/Material Award":
              "US$1,000,000, plus travel expenses to the ACM Awards Banquet; financial support is provided by Google.",
            "Number of Recipients":
              "Usually one person, but can be shared by multiple recipients. Official winners list shows shared awards in some years.",
            "Notable Past Recipients":
              "Yoshua Bengio, Geoffrey Hinton, Yann LeCun, Avi Wigderson, Robert Metcalfe, Jack Dongarra, Alfred Aho, Jeffrey Ullman, Edwin Catmull, Patrick Hanrahan, Andrew Barto, Richard Sutton, and others.",
            "Career Impact/Outcomes":
              "Extremely high symbolic and reputational impact; widely treated as the top distinction in computing. Specific quantified career-impact statistics were not found in the reviewed official sources.",
            "Relationship to Other Awards":
              "Often regarded as the computing equivalent of a Nobel Prize; many recipients already hold major academic honors and fellowships.",
            "Ranking/Prestige Signal":
              "Level 1A apex global prize; field-defining, internationally recognized, highly selective."
          },
          "ACM/AAAI Allen Newell Award": {
            "Official Name": "ACM/AAAI Allen Newell Award",
            "Institution/Type": "Major interdisciplinary computing / AI award.",
            Definition:
              "Award recognizing career contributions that have breadth within computer science or that bridge computer science and other disciplines. AI is often central, but nominations from other computing areas are also eligible when they show breadth, bridging, and high impact.",
            "History/Background":
              "Established to honor Allen Newell, a founder of artificial intelligence and first president of AAAI, known for cross-disciplinary work across AI, cognitive science, cognitive psychology, computer architecture, and HCI.",
            Purpose:
              "To recognize broad, high-impact career contributions across multiple CS subfields or between CS and other disciplines.",
            "Awarding Body": "ACM and AAAI; supported through ACM, AAAI, and individual contributors.",
            "Organization Type": "Professional/scientific societies.",
            Mission:
              "Supports recognition of interdisciplinary, high-impact computing contributions, especially those connecting AI with other fields.",
            Leadership: "Administered through ACM's awards program with AAAI involvement/support.",
            "Committee/Jury Composition":
              "Public page does not clearly state committee size or composition in the captured source; mark as Needs verification from ACM award committee page.",
            "Main Field/Scope":
              "Computer science broadly, especially AI and interdisciplinary computing; includes work spanning CS subdisciplines or bridging CS with other areas.",
            "Geographic Scope": "Global / international.",
            "Geographic Distribution": "No formal regional quota identified.",
            "Amount of Members": "Not a membership grade; no member count applies.",
            "Type of Recognition": "Major field award / career contribution award.",
            "Nomination Process":
              "Online nomination form. Nominator should preferably be a recognized community member not from the same organization as the candidate and able to address broad community impact.",
            "Review/Evaluation Criteria":
              "Quality of contributions, breadth across computer science, contributions to AI where relevant, and significance of bridges created to other disciplines.",
            "Nomination Deadline": "Next listed deadline: December 15, 2026, end of day, Anywhere on Earth.",
            "Application Requirements":
              "Nomination form, nominator information, candidate information, candidate CV, and supporting nomination materials. Additional letter counts/details should be verified from the current ACM guidance.",
            "Eligibility/Restrictions":
              "Career contributions must show breadth within CS or bridge CS and other disciplines. No citizenship/age limit found in the reviewed source.",
            Frequency: "Annual.",
            Duration: "One-time award, lifetime prestige.",
            "Prize Money/Material Award": "US$10,000, plus travel expenses to the ACM Awards Banquet.",
            "Number of Recipients": "Typically one recipient per award cycle, but verify by year from ACM recipient list.",
            "Notable Past Recipients":
              "Peter Stone, David Blei, Takeo Kanade, Daphne Koller, Jon Kleinberg, Barbara Grosz, Eric Horvitz, and others appear in official/recipient listings.",
            "Career Impact/Outcomes":
              "Strong prestige signal for researchers whose work spans multiple areas or bridges computing with other disciplines. Quantified career-impact statistics were not found in the reviewed sources.",
            "Relationship to Other Awards":
              "Sits below the Turing Award in global prestige but is a major ACM/AAAI recognition for broad and interdisciplinary computing impact.",
            "Ranking/Prestige Signal":
              "Level 1C elite field-specific prize / interdisciplinary computing distinction in the hybrid framework."
          }
        }
      },
      {
        organization: "AAAI (Association for the Advancement of Artificial Intelligence)",
        website: "https://aaai.org",
        recognition: "AAAI Fellow; ACM/AAAI Allen Newell Award; AAAI Feigenbaum Prize"
      },
      { organization: "AAAS (American Association for the Advancement of Science)", recognition: "AAAS Fellow", website: "https://www.aaas.org" },
      { organization: "IMS (Institute of Mathematical Statistics)", recognition: "IMS Fellow", website: "https://imstat.org" },
      { organization: "ACL (Association for Computational Linguistics)", recognition: "ACL Fellow", website: "https://www.aclweb.org" },
      { organization: "ISCB (International Society for Computational Biology)", recognition: "ISCB Fellow; Overton Prize", website: "https://www.iscb.org" },
      { organization: "ASME (American Society of Mechanical Engineers)", recognition: "ASME Fellow; ASME Machine Design Award", website: "https://www.asme.org" },
      { organization: "BCS (The Chartered Institute for IT)", recognition: "BCS Fellow", website: "https://www.bcs.org" },
      { organization: "ASA (American Statistical Association)", recognition: "ASA Fellow; Leo Breiman Junior Award", website: "https://www.amstat.org" },
      { organization: "COPSS (Committee of Presidents of Statistical Societies)", recognition: "COPSS Presidents' Award", website: "https://community.amstat.org/copss/home" },
      { organization: "International Association for Pattern Recognition (IAPR)", recognition: "IAPR Fellow; IAPR King-Sun Fu Prize", website: "https://iapr.org" },
      { organization: "International Society for Optics and Photonics (SPIE)", recognition: "SPIE Fellow", website: "https://spie.org" },
      { organization: "Real-World Cryptography", recognition: "Levchin Prize for Real-World Cryptography", website: "https://rwc.iacr.org" },
      { organization: "European Molecular Biology Organization (EMBO)", recognition: "European Molecular Biology Organization EMBO Member", website: "https://www.embo.org" },
      { organization: "European Association for Signal Processing (EURASIP)", recognition: "European Association for Signal Processing EURASIP Fellow", website: "https://eurasip.org" },
      { organization: "International Joint Conferences on Artificial Intelligence (IJCAI)", recognition: "IJCAI Award for Research Excellence", website: "https://www.ijcai.org" },
      { organization: "American Mathematical Society (AMS)", recognition: "AMS Ulf Grenander Prize in Stochastic Theory and Modeling", website: "https://www.ams.org" },
      { organization: "American Academy of Microbiology", recognition: "American Academy of Microbiology Fellow", website: "https://asm.org/Academy" },
      { organization: "Institution of Engineering and Technology (IET)", recognition: "Institution of Engineering and Technology IET Faraday Prize / Medal", website: "https://www.theiet.org" },
      { organization: "Japan Society of Mechanical Engineers (JSME)", recognition: "Japan Society of Mechanical Engineers JSME Fellow; JSME Medal for Distinguished Engineers", website: "https://www.jsme.or.jp" }
    ]
  },
  {
    id: "private-foundations",
    number: "04",
    title: "Private Foundations",
    shortTitle: "Foundations",
    accent: "#9e5b50",
    icon: "gem",
    definition:
      "Draft scope: fellowships, prizes, awards, and recognition programs conferred by independent private foundations or trusts, usually through competitive or invited selection.",
    criteria: [
      "The awarding body is a private foundation, trust, or independent nonprofit funder.",
      "The recognition attaches to individual excellence, promise, leadership, or creative scholarship.",
      "The program may provide funding, prestige, convening power, or a named fellowship title."
    ],
    items: [
      {
        organization: "Nobel Foundation",
        recognition: "Nobel Prize",
        website: "https://www.nobelprize.org",
        bodyProfile: {
          officialName: "The Nobel Foundation",
          organizationType: "Private foundation",
          definition:
            "A private institution with ultimate responsibility for fulfilling the intentions in Alfred Nobel's will.",
          historyBackground:
            "Established on 29 June 1900, four years after Alfred Nobel's death, to invest Nobel's fortune and manage the immaterial value of the Nobel Prize.",
          purpose:
            "Ensure that Alfred Nobel's will is fulfilled and that the Nobel Prize has a secure long-term financial standing.",
          mission:
            "Manage Alfred Nobel's fortune, protect the common interests and independence of the prize-awarding institutions, and administer the Nobel Prize's brands and intangible assets.",
          governanceLeadership:
            "The Nobel Foundation safeguards the Nobel Prize system, while the prize-awarding institutions remain independent in selecting Nobel Laureates.",
          scopeReach: "International; supports the Nobel Prize system and its prize-awarding institutions.",
          source: "https://www.nobelprize.org/the-nobel-prize-organisation/the-nobel-foundation/"
        },
        bodyProfileRows: [
          { field: "Organization", value: "Nobel Foundation" },
          { field: "Official Name", value: "The Nobel Foundation" },
          { field: "Organization Type", value: "Private foundation / private institution." },
          { field: "Institution", value: "Private Foundations" },
          {
            field: "Definition",
            value:
              "A private institution with ultimate responsibility for fulfilling the intentions in Alfred Nobel's will. In this portal, it functions as the private foundation context for the Nobel Prize system."
          },
          {
            field: "History/Background",
            value:
              "Established on 29 June 1900, four years after Alfred Nobel's death, to invest Nobel's fortune and manage the immaterial value of the Nobel Prize."
          },
          {
            field: "Purpose",
            value:
              "To ensure that Alfred Nobel's will is fulfilled and that the Nobel Prize has a secure long-term financial standing."
          },
          {
            field: "Mission",
            value:
              "To manage Alfred Nobel's fortune, protect the common interests and independence of the prize-awarding institutions, and administer the Nobel Prize's brands and intangible assets."
          },
          {
            field: "Governance/Leadership",
            value:
              "The Nobel Foundation safeguards the Nobel Prize system, while the prize-awarding institutions remain independent in selecting Nobel Laureates."
          },
          {
            field: "Scope/Reach",
            value:
              "International; supports the Nobel Prize system and its independent prize-awarding institutions across science, literature, peace, and economic sciences."
          },
          { field: "Recognition Types", value: "Nobel Prize" },
          {
            field: "Recognition Type Summary",
            value:
              "The Nobel Prize is a global apex prize recognizing people and organizations whose work has conferred exceptional benefit to humankind."
          }
        ],
        criteriaProfiles: {
          "Nobel Prize": {
            "Official Name": "Nobel Prize",
            "Institution/Type": "Global apex prize.",
            Definition:
              "The Nobel Prize is a set of internationally recognized prizes honoring people and organizations whose work has conferred the greatest benefit to humankind in the areas specified by Alfred Nobel's will.",
            "History/Background":
              "The Nobel Prize was established through Alfred Nobel's will. The first Nobel Prizes were awarded in 1901 in Physics, Chemistry, Physiology or Medicine, Literature, and Peace; the Sveriges Riksbank Prize in Economic Sciences is administered with the Nobel system but was established later.",
            Purpose:
              "To recognize discoveries, inventions, literary work, peace efforts, and other contributions judged to have exceptional benefit for humankind.",
            "Awarding Body":
              "The relevant Nobel Prize-awarding institutions select laureates: the Royal Swedish Academy of Sciences, the Nobel Assembly at Karolinska Institutet, the Swedish Academy, and the Norwegian Nobel Committee. The Nobel Foundation administers the Nobel system and safeguards the prize assets and brand.",
            "Organization Type":
              "Private foundation-supported prize system with independent prize-awarding institutions.",
            Mission:
              "The Nobel system carries out Alfred Nobel's will by recognizing work of exceptional benefit to humankind and protecting the independence of the prize-awarding institutions.",
            Leadership:
              "The Nobel Foundation is responsible for the long-term administration of the Nobel Prize system, while each prize-awarding institution independently manages its own selection process.",
            "Committee/Jury Composition":
              "Each Nobel category has its own Nobel Committee or awarding body process. Committees screen confidential nominations, seek expert input, and make recommendations to the relevant prize-awarding institution, which makes the final decision.",
            "Main Field/Scope":
              "Physics, Chemistry, Physiology or Medicine, Literature, Peace, and the Nobel-associated Economic Sciences prize.",
            "Geographic Scope": "Global / international.",
            "Geographic Distribution":
              "No public regional quota. Selection is based on contribution, discovery, work, or peace impact rather than geographic allocation.",
            "Amount of Members": "Not a membership distinction; no member count applies.",
            "Type of Recognition": "One-time global prize with lifetime prestige.",
            "Nomination Process":
              "Nomination is by invitation only. Qualified nominators are invited by the relevant Nobel Committee or awarding institution; self-nominations are not considered.",
            "Review/Evaluation Criteria":
              "Exceptional discoveries, achievements, literary work, or peace contributions aligned with Alfred Nobel's will and evaluated by the relevant Nobel category process.",
            "Nomination Deadline":
              "Annual and confidential. Invitations sent a year before. Deadline depends on committee.",
            "Application Requirements":
              "No open application. Nominations are confidential and submitted by invited nominators with supporting rationale and materials required by the relevant committee.",
            "Eligibility/Restrictions":
              "Eligibility varies by prize area. Nobel Prizes are generally awarded to individuals, while the Peace Prize may also be awarded to organizations. Self-nomination is not accepted.",
            Frequency: "Annual.",
            Duration: "One-time award, lifetime prestige.",
            "Prize Money/Material Award":
              "Nobel Laureates receive a medal, diploma, and prize amount set for that year's Nobel Prize; the amount may be shared if a prize has multiple laureates.",
            "Number of Recipients":
              "The number varies by prize and year. Some Nobel Prizes are shared by multiple laureates; some years a prize may be reserved or not awarded.",
            "Notable Past Recipients":
              "Examples include Marie Curie, Albert Einstein, Martin Luther King Jr., Dorothy Crowfoot Hodgkin, Amartya Sen, Jennifer Doudna, Emmanuelle Charpentier, Katalin Kariko, Drew Weissman, and many others.",
            notableRecipients: [
              {
                name: "Marie Curie",
                prize: "Physics 1903; Chemistry 1911",
                image:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Marie_Curie_c._1920s.jpg/330px-Marie_Curie_c._1920s.jpg"
              },
              {
                name: "Albert Einstein",
                prize: "Physics 1921",
                image:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Albert_Einstein_Head_cleaned.jpg/330px-Albert_Einstein_Head_cleaned.jpg"
              },
              {
                name: "Martin Luther King Jr.",
                prize: "Peace 1964",
                image:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Martin_Luther_King%2C_Jr..jpg/330px-Martin_Luther_King%2C_Jr..jpg"
              },
              {
                name: "Katalin Kariko",
                prize: "Physiology or Medicine 2023",
                image:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Katalin_Karik%C3%B3_by_Michel_2024_02.jpg/330px-Katalin_Karik%C3%B3_by_Michel_2024_02.jpg"
              }
            ],
            "Career Impact/Outcomes":
              "The Nobel Prize is among the strongest global prestige signals in scholarship, science, literature, and peace work. It usually produces major public visibility and durable historical recognition.",
            "Relationship to Other Awards":
              "Nobel Laureates often also hold major academy memberships, national honors, and elite disciplinary prizes, but the Nobel Prize is not a formal prerequisite for those distinctions.",
            "Ranking/Prestige Signal":
              "Level 1A apex global prize in the portal framework; field-defining, internationally recognized, and highly selective."
          }
        }
      },
      {
        organization: "MacArthur Foundation",
        recognition: "MacArthur Fellowship",
        website: "https://www.macfound.org",
        bodyProfile: {
          officialName: "John D. and Catherine T. MacArthur Foundation",
          organizationType:
            "Private foundation / independent foundation. MacArthur describes itself as one of the United States' largest independent foundations, and its financial page identifies its annual IRS filing as a 990-PF, the tax return filed by private foundations.",
          definition:
            "A U.S.-based private philanthropic foundation that funds individuals, nonprofit organizations, and networks through grants, impact investments, and recognition programs. In this taxonomy, it functions as an independent private foundation awarding body because it confers named recognitions such as the MacArthur Fellowship and supports work through foundation-administered awards and grantmaking.",
          historyBackground:
            "The Foundation's organizing documents were completed on October 18, 1970, after John D. MacArthur was advised that a foundation could put his wealth to public use after his death. John D. MacArthur died in 1978, and the Foundation began awarding grants soon afterward. Its early program areas included the MacArthur Fellows, public radio, peace and security, mental health, and the environment.",
          purpose:
            "To invest philanthropic capital in people, institutions, and networks addressing major social challenges, while also recognizing exceptional individual creativity through awards. Current areas highlighted by the Foundation include climate change, criminal justice reform, local news in the United States, equitable participation in artificial intelligence, Native communities, Nigeria-focused work, journalism, Chicago, impact investments, and technology in the public interest.",
          mission:
            "To support creative people, effective institutions, and influential networks working toward a more just, verdant, and peaceful world.",
          governanceLeadership:
            "The Foundation is governed by a Board of Directors that sets policy and strategic direction, approves grantmaking areas and initiatives, approves grants, and oversees investments and audit processes through committees. John Palfrey has served as President since September 1, 2019. Juan Salgado was elected Chair of the Board and assumed the role in June 2025.",
          scopeReach:
            "MacArthur is headquartered in Chicago, with offices in India and Nigeria. Over its 47-year history, it reports awarding more than $9.19 billion to nearly 11,000 organizations and individuals across 119 countries, all 50 U.S. states, Puerto Rico, and the U.S. Virgin Islands. In 2025, it paid out $561.6 million in grants and impact investments.",
          source: "MacArthur foundationxxx.docx"
        },
        bodyProfileRows: [
          { field: "Organization", value: "MF - MacArthur Foundation" },
          { field: "Official Name", value: "John D. and Catherine T. MacArthur Foundation" },
          {
            field: "Organization Type",
            value:
              "Private foundation / independent foundation. MacArthur describes itself as one of the United States' largest independent foundations, and its financial page identifies its annual IRS filing as a 990-PF, the tax return filed by private foundations."
          },
          { field: "Institution", value: "Private Foundations" },
          {
            field: "Definition",
            value:
              "A U.S.-based private philanthropic foundation that funds individuals, nonprofit organizations, and networks through grants, impact investments, and recognition programs. In this taxonomy, it functions as an independent private foundation awarding body because it confers named recognitions such as the MacArthur Fellowship and supports work through foundation-administered awards and grantmaking."
          },
          {
            field: "History/Background",
            value:
              "The Foundation's organizing documents were completed on October 18, 1970, after John D. MacArthur was advised that a foundation could put his wealth to public use after his death. John D. MacArthur died in 1978, and the Foundation began awarding grants soon afterward. Its early program areas included the MacArthur Fellows, public radio, peace and security, mental health, and the environment."
          },
          {
            field: "Purpose",
            value:
              "To invest philanthropic capital in people, institutions, and networks addressing major social challenges, while also recognizing exceptional individual creativity through awards. Current areas highlighted by the Foundation include climate change, criminal justice reform, local news in the United States, equitable participation in artificial intelligence, Native communities, Nigeria-focused work, journalism, Chicago, impact investments, and technology in the public interest."
          },
          {
            field: "Mission",
            value:
              "To support creative people, effective institutions, and influential networks working toward a more just, verdant, and peaceful world."
          },
          {
            field: "Governance/Leadership",
            value:
              "The Foundation is governed by a Board of Directors that sets policy and strategic direction, approves grantmaking areas and initiatives, approves grants, and oversees investments and audit processes through committees. John Palfrey has served as President since September 1, 2019. Juan Salgado was elected Chair of the Board and assumed the role in June 2025."
          },
          {
            field: "Scope/Reach",
            value:
              "MacArthur is headquartered in Chicago, with offices in India and Nigeria. Over its 47-year history, it reports awarding more than $9.19 billion to nearly 11,000 organizations and individuals across 119 countries, all 50 U.S. states, Puerto Rico, and the U.S. Virgin Islands. In 2025, it paid out $561.6 million in grants and impact investments."
          },
          { field: "Recognition Types", value: "MacArthur Fellowship" },
          {
            field: "Recognition Type Summary",
            value:
              "The MacArthur Fellowship is an $800,000, no-strings-attached award for extraordinarily talented and creative individuals, intended as an investment in their future potential."
          }
        ],
        criteriaProfiles: {
          "MacArthur Fellowship": {
            "Official Name": "MacArthur Fellowship",
            "Institution/Type": "Private foundation fellowship / unrestricted individual award.",
            Definition:
              "The MacArthur Fellowship is an $800,000, no-strings-attached award for extraordinarily talented and creative individuals, intended as an investment in their future potential.",
            "History/Background":
              "The MacArthur Fellows Program began in 1981 and has become one of the best-known private foundation fellowship programs in the United States.",
            Purpose:
              "To identify and support exceptionally creative people with a track record of significant accomplishment and strong promise for important future advances.",
            "Awarding Body": "John D. and Catherine T. MacArthur Foundation.",
            "Organization Type": "Private foundation / independent foundation.",
            Mission:
              "To support creative people, effective institutions, and influential networks working toward a more just, verdant, and peaceful world.",
            Leadership:
              "The Foundation is governed by its Board of Directors. John Palfrey has served as President since September 1, 2019, and Juan Salgado assumed the Board Chair role in June 2025.",
            "Committee/Jury Composition":
              "The selection process is confidential. Candidates are identified by invited nominators and evaluated through confidential review and selection processes; candidates do not apply and are typically unaware they are under consideration.",
            "Main Field/Scope":
              "Broadly interdisciplinary. Fellows may come from science, technology, scholarship, public interest work, arts, literature, journalism, social justice, design, education, and other creative fields.",
            "Geographic Scope": "United States-focused with U.S. citizenship or residency requirements.",
            "Geographic Distribution":
              "No public regional quota. Fellows are selected across fields and geographies based on creativity, achievement, and future potential.",
            "Amount of Members": "Not a membership body; the fellowship has more than 1,000 recipients across its history.",
            "Type of Recognition": "Unrestricted fellowship / private foundation award.",
            "Nomination Process":
              "No applications or unsolicited nominations are accepted. Candidates are identified through a confidential nomination and review process.",
            "Review/Evaluation Criteria":
              "Exceptional creativity, a track record of significant achievement, and potential for important future advances that the fellowship may facilitate.",
            "Nomination Deadline":
              "No public application deadline. The process is confidential and administered internally by the Foundation.",
            "Application Requirements":
              "No applicant-submitted materials. Candidates do not apply; supporting information is gathered through confidential nomination, evaluation, and review.",
            "Eligibility/Restrictions":
              "Recipients must generally be U.S. citizens or residents and may not hold elective office or advanced government positions. The award is for individuals rather than organizations.",
            Frequency: "Annual.",
            Duration: "Five-year unrestricted fellowship award.",
            "Prize Money/Material Award":
              "$800,000, no strings attached, paid over five years.",
            "Number of Recipients":
              "The annual cohort size varies; MacArthur typically names a small cohort of Fellows each year.",
            "Notable Past Recipients":
              "Examples include Carlos D. Bustamante, Ta-Nehisi Coates, Lin-Manuel Miranda, Ruth Wilson Gilmore, Angela Duckworth, Ibram X. Kendi, and many others across scholarship, science, arts, and public life.",
            "Career Impact/Outcomes":
              "A major public prestige signal that provides unrestricted funding, time, and visibility for future creative work. It is widely known as a high-prestige private foundation fellowship.",
            "Relationship to Other Awards":
              "Distinct from MacArthur grants and impact investments. It is not a formal prerequisite for other honors, but Fellows often also hold major academic, artistic, civic, or disciplinary recognitions.",
            "Ranking/Prestige Signal":
              "Level 2 major fellowship / private foundation distinction in the portal framework; very high prestige, especially in U.S. public-facing recognition."
          }
        }
      },
      { organization: "John Simon Guggenheim Memorial Foundation", recognition: "Guggenheim Fellowship", website: "https://www.gf.org" },
      { organization: "Alexander von Humboldt Foundation", recognition: "Humboldt Research Award", website: "https://www.humboldt-foundation.de" },
      { organization: "Alfred P. Sloan Foundation", recognition: "Sloan Research Fellowship", website: "https://sloan.org" },
      { organization: "BBVA Foundation", recognition: "BBVA Frontiers of Knowledge Award", website: "https://www.fbbva.es" },
      { organization: "Breakthrough Prize Foundation", recognition: "Breakthrough Prize", website: "https://breakthroughprize.org" },
      { organization: "Lasker Foundation", recognition: "Lasker Award", website: "https://laskerfoundation.org" },
      {
        organization: "Wolf Foundation",
        recognition: "Wolf Prize",
        website: "https://wolffund.org.il",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/41/Wolf_Foundation_Logo.svg"
      },
      {
        organization: "Robert J. Glushko and Pamela Samuelson Foundation",
        recognition: "Rumelhart Prize",
        note: "Presented with, and independent from, the Cognitive Science Society",
        website: "https://glushkofoundation.org"
      },
      {
        organization: "German Cancer Prize",
        recognition: "German Cancer Prize",
        logoUrl: "assets/dkfz-logo.png",
        logoFit: "wide"
      },
      { organization: "Michael Bruno Memorial Award", recognition: "Michael Bruno Award" }
    ]
  },
  {
    id: "government-and-philanthropic-funding-bodies",
    number: "05",
    title: "Government and Philanthropic Funding Bodies",
    shortTitle: "Funding Bodies",
    accent: "#b98a35",
    icon: "briefcase",
    definition:
      "Draft scope: distinctions connected to competitive public, sovereign, charitable, or philanthropic funding programs, especially when the award names an individual as fellow, investigator, laureate, chair, or principal awardee.",
    criteria: [
      "The body is a public agency, governmental funder, sovereign initiative, philanthropic funder, or hybrid funding organization.",
      "Selection is competitive, externally reviewed, or nationally/internationally recognized.",
      "The distinction may be attached to a grant, fellowship, investigator program, chair, prize, or strategic award."
    ],
    items: [
      {
        organization: "U.S. Department of State",
        recognition: "Fulbright U.S. Scholar / Distinguished Scholar Awards",
        note: "Directed by the State Department's Bureau of Educational and Cultural Affairs",
        website: "https://www.state.gov"
      },
      { organization: "European Research Council (ERC)", recognition: "ERC Advanced Grant; Consolidator Grant", website: "https://erc.europa.eu" },
      {
        organization: "National Institutes of Health (NIH)",
        recognition: "NIH R01 Grant",
        website: "https://www.nih.gov",
        logoUrl: "https://www.ncbi.nlm.nih.gov/core/assets/style-guide/img/nih-logo.png"
      },
      { organization: "Wellcome Trust", recognition: "Wellcome Trust Investigator Awards", website: "https://wellcome.org" },
      { organization: "Centre national de la recherche scientifique (CNRS)", recognition: "CNRS Silver Medal", website: "https://www.cnrs.fr" },
      { organization: "German Research Foundation (DFG)", recognition: "Gottfried Wilhelm Leibniz Prize", website: "https://www.dfg.de" },
      { organization: "German Future Prize", recognition: "German Future Prize", website: "https://www.deutscher-zukunftspreis.de" }
    ]
  },
  {
    id: "international-bodies",
    number: "06",
    title: "International Bodies",
    shortTitle: "International",
    accent: "#6c5b8f",
    icon: "globe",
    definition:
      "Draft scope: distinctions from international, multilateral, regional, or cross-border organizations whose recognition is explicitly global or transnational in scope.",
    criteria: [
      "The body operates across countries or represents an international community.",
      "The distinction is not confined to one national academy or one domestic funding system.",
      "Examples may include international academies, global societies, multilateral advisory bodies, and cross-border fellowships."
    ],
    items: [
      { organization: "International Mathematical Union", recognition: "Fields Medal", website: "https://www.mathunion.org" },
      {
        organization: "World Laureates Association",
        recognition: "World Laureates Association Prize",
        website: "https://www.wlasci.org",
        logoUrl: "https://www.wlasci.org/skin/images/logo.png"
      },
      {
        organization: "van Niel International Prize",
        recognition: "van Niel International Prize",
        logoUrl: "assets/van-niel-logo.png",
        logoFit: "wide"
      }
    ]
  },
  {
    id: "editorial-and-conference-leadership",
    number: "07",
    title: "Editorial and Conference Leadership",
    shortTitle: "Editorial Leadership",
    accent: "#3d6e75",
    icon: "podium",
    definition:
      "Draft scope: leadership roles that signal scholarly influence through journals, book series, conferences, program committees, steering committees, and major convening responsibilities.",
    criteria: [
      "The role involves editorial judgment, conference governance, program leadership, or visible community stewardship.",
      "The venue, journal, series, or conference has recognized standing in the relevant field.",
      "Examples may include editor-in-chief, associate editor, general chair, program chair, area chair, steering committee member, and named lecture organizer."
    ],
    items: [
      {
        organization: "Leading Journals (Nature, Science, Cell, etc.)",
        recognition: "Editor for leading journals; Senior Editor (Nature, Science, Cell)",
        logos: [
          { src: "assets/nature-logo.svg", label: "Nature" },
          { src: "assets/science-logo.svg", label: "Science" },
          { src: "assets/cell-logo.svg", label: "Cell" }
        ],
        logoDomains: ["nature.com", "science.org", "cell.com"]
      },
      {
        organization: "Major Conferences (NeurIPS, ICLR, ACL, ICCV)",
        recognition: "Program Chair (NeurIPS, ICLR, ACL, ICCV)",
        logoDomains: ["neurips.cc", "iclr.cc", "aclweb.org", "thecvf.com"]
      }
    ]
  }
];

const icons = {
  arrowRight: '<path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>',
  back: '<path d="m15 18-6-6 6-6"></path>',
  search: '<circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path>',
  download: '<path d="M12 3v12"></path><path d="m7 10 5 5 5-5"></path><path d="M5 21h14"></path>',
  landmark: '<path d="M3 21h18"></path><path d="M5 10h14"></path><path d="M6 10v8"></path><path d="M10 10v8"></path><path d="M14 10v8"></path><path d="M18 10v8"></path><path d="M4 10l8-6 8 6"></path>',
  columns: '<path d="M4 21h16"></path><path d="M6 18h12"></path><path d="M7 9v9"></path><path d="M12 9v9"></path><path d="M17 9v9"></path><path d="M5 9h14"></path><path d="M4 6l8-3 8 3"></path>',
  network: '<circle cx="6" cy="7" r="3"></circle><circle cx="18" cy="7" r="3"></circle><circle cx="12" cy="17" r="3"></circle><path d="M8.5 9.2 10.5 14"></path><path d="m15.5 9.2-2 4.8"></path><path d="M9 7h6"></path>',
  gem: '<path d="M6 3h12l4 6-10 12L2 9l4-6Z"></path><path d="M2 9h20"></path><path d="m12 21 4-12-4-6-4 6 4 12Z"></path>',
  briefcase: '<path d="M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1"></path><path d="M3 8h18v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Z"></path><path d="M3 13h18"></path><path d="M9 13v2h6v-2"></path>',
  globe: '<circle cx="12" cy="12" r="9"></circle><path d="M3 12h18"></path><path d="M12 3a14 14 0 0 1 0 18"></path><path d="M12 3a14 14 0 0 0 0 18"></path>',
  podium: '<path d="M5 21h14"></path><path d="M7 17h10v4H7z"></path><path d="M9 13h6v4H9z"></path><path d="M11 3h2v10h-2z"></path><path d="M8 5h8"></path>'
};

const recognitionCriteriaSections = [
  {
    title: "Basic Information",
    fields: ["Official Name", "Institution/Type", "Definition", "History/Background", "Purpose"]
  },
  {
    title: "Organization and Governance",
    fields: [
      "Awarding Body",
      "Organization Type",
      "Mission",
      "Leadership",
      "Committee/Jury Composition"
    ]
  },
  {
    title: "Scope and Reach",
    fields: [
      "Main Field/Scope",
      "Geographic Scope",
      "Geographic Distribution",
      "Amount of Members",
      "Type of Recognition"
    ]
  },
  {
    title: "Selection and Application",
    fields: [
      "Nomination Process",
      "Review/Evaluation Criteria",
      "Nomination Deadline",
      "Application Requirements",
      "Eligibility/Restrictions"
    ]
  },
  {
    title: "Award Details",
    fields: ["Frequency", "Duration", "Prize Money/Material Award", "Number of Recipients"]
  },
  {
    title: "Impact and Prestige",
    fields: [
      "Notable Past Recipients",
      "Career Impact/Outcomes",
      "Relationship to Other Awards",
      "Ranking/Prestige Signal"
    ]
  }
];

const bodyProfileFields = [
  "Official Name",
  "Organization Type",
  "Definition",
  "History/Background",
  "Purpose",
  "Mission",
  "Governance/Leadership",
  "Scope/Reach",
  "Recognition Types",
  "Source"
];

const tierDefinitions = {
  level1a: {
    label: "Level 1A",
    title: "Apex Academy or Apex Global Prize",
    definition: "Apex academies and apex global prizes; strongest institutional reputation signals."
  },
  level1b: {
    label: "Level 1B",
    title: "Global Mega-Prize",
    definition:
      "Global mega-prizes below the apex Nobel, Turing, Fields, or Abel class but still carrying very high international prestige."
  },
  level1c: {
    label: "Level 1C",
    title: "Elite Field-Specific Prize or Medal",
    definition:
      "Elite field-specific prizes or medals in AI, computing, statistics, vision, NLP, bioinformatics, or comparable fields."
  },
  level2: {
    label: "Level 2",
    title: "Major Fellowship, Academy, Senior Distinction, or Field Leadership",
    definition:
      "Major elected society fellowships, non-apex academies, senior honors, and major scholarly field leadership roles."
  },
  level3: {
    label: "Level 3",
    title: "Pipeline, Specialized, Professional, Grant, or Innovation Distinction",
    definition:
      "Pipeline, early-career, competitive grant, paper, professional, or innovation distinctions."
  },
  level4: {
    label: "Level 4",
    title: "Campus Citizenship and Educational Excellence",
    definition: "Internal teaching, mentorship, service, culture, and campus citizenship excellence."
  }
};

const legacyFacultyRecognitions = [
  {
    faculty: "Anil K. Jain",
    distinction: "IAPR Fellow",
    work:
      "Contributions to statistical pattern recognition, range-data analysis, and service to IAPR.",
    publicCategory: "Disciplinary Society Fellowships & Field Leadership",
    internalLevel: "Level 2 / Tier 2",
    levelKey: "level2"
  },
  {
    faculty: "Anil K. Jain",
    distinction: "SPIE Fellow",
    work:
      "No public SPIE Fellow citation found. The best-supported basis is his work in pattern recognition and biometrics, especially biometric technology for human identification.",
    publicCategory: "Disciplinary Society Fellowships & Field Leadership",
    internalLevel: "Level 2 / Tier 2",
    levelKey: "level2"
  },
  {
    faculty: "Anil K. Jain",
    distinction: "IEEE W. Wallace McDowell Award",
    work:
      "Pioneering contributions to the theory, techniques, and practice of pattern recognition, computer vision, and biometric recognition systems.",
    publicCategory: "Global / Disciplinary Field Leadership",
    internalLevel: "Level 1C / Tier 1C",
    levelKey: "level1c"
  },
  {
    faculty: "Anil K. Jain",
    distinction: "IAPR King-Sun Fu Prize",
    work:
      "Pioneering contributions to pattern recognition theory and practice, computer vision, and the design of biometric systems.",
    publicCategory: "Global / Disciplinary Field Leadership",
    internalLevel: "Level 1C / Tier 1C",
    levelKey: "level1c"
  },
  {
    faculty: "David Basin",
    distinction: "Levchin Prize for Real-World Cryptography",
    work:
      "Development of the Tamarin Prover and its use in the formal analysis and verification of real-world cryptographic protocols.",
    publicCategory: "Global / Disciplinary Field Leadership",
    internalLevel: "Level 1C / Tier 1C",
    levelKey: "level1c"
  },
  {
    faculty: "Eran Segal",
    distinction: "European Molecular Biology Organization EMBO Member",
    work:
      "No individual EMBO citation found. EMBO membership recognizes research excellence and outstanding achievement; Segal's relevant body of work is computational and systems biology, including personalized nutrition/medicine, microbiome, genetics, nutrition, and gene regulation.",
    publicCategory: "Disciplinary Society Fellowships & Field Leadership",
    internalLevel: "Level 2 / Tier 2",
    levelKey: "level2"
  },
  {
    faculty: "Éric Moulines",
    distinction: "CNRS Silver Medal",
    work:
      "Work in statistical signal processing and statistical information processing, including earlier work in automatic speech processing/speech synthesis and later contributions to statistical methods in signal processing.",
    publicCategory: "Disciplinary Field Leadership",
    internalLevel: "Level 2 / Tier 2",
    levelKey: "level2"
  },
  {
    faculty: "Éric Moulines",
    distinction: "Orange Prize / French Academy Grand Prix",
    work:
      "No separate public prize citation found. The best-supported associated work is in statistical learning, numerical probability, statistical signal processing, Bayesian inference, Monte Carlo methods, and stochastic algorithms.",
    publicCategory: "Disciplinary Field Leadership",
    internalLevel: "Level 2 / Tier 2",
    levelKey: "level2"
  },
  {
    faculty: "Éric Moulines",
    distinction: "European Association for Signal Processing EURASIP Fellow",
    work:
      "Contributions to statistical signal processing and applications to speech analysis.",
    publicCategory: "Disciplinary Society Fellowships & Field Leadership",
    internalLevel: "Level 2 / Tier 2",
    levelKey: "level2"
  },
  {
    faculty: "Gregory Chirikjian",
    distinction: "ASME Machine Design Award",
    work:
      "Introducing design paradigms for hyper-redundant mechanisms, binary-actuated mechanisms, modular self-reconfigurable robots, and spherical motors, plus mentoring in machine design.",
    publicCategory: "Disciplinary Field Leadership",
    internalLevel: "Level 2 / Tier 2",
    levelKey: "level2"
  },
  {
    faculty: "Ian Reid",
    distinction: "Australian Academy of Technological Sciences and Engineering ATSE Fellow",
    publicCategory: "Global / Disciplinary Field Leadership",
    internalLevel: "Level 2 / Tier 2",
    levelKey: "level2"
  },
  {
    faculty: "Iryna Gurevych",
    distinction: "Royal Society Milner Award",
    publicCategory: "Global / Disciplinary Field Leadership",
    internalLevel: "Level 1C / Tier 1C",
    levelKey: "level1c"
  },
  {
    faculty: "Lena Maier-Hein",
    distinction: "German Cancer Prize",
    publicCategory: "Disciplinary Field Leadership",
    internalLevel: "Level 2 / Tier 2",
    levelKey: "level2"
  },
  {
    faculty: "Michael Jordan",
    distinction: "IJCAI Award for Research Excellence",
    publicCategory: "Global / Disciplinary Field Leadership",
    internalLevel: "Level 1C / Tier 1C",
    levelKey: "level1c"
  },
  {
    faculty: "Michael Jordan",
    distinction: "AMS Ulf Grenander Prize in Stochastic Theory and Modeling",
    publicCategory: "Global / Disciplinary Field Leadership",
    internalLevel: "Level 1C / Tier 1C",
    levelKey: "level1c"
  },
  {
    faculty: "Nikolaos \"Nikos\" Kyrpides",
    distinction: "van Niel International Prize",
    publicCategory: "Disciplinary Field Leadership",
    internalLevel: "Level 2 / Tier 2",
    levelKey: "level2"
  },
  {
    faculty: "Nikolaos \"Nikos\" Kyrpides",
    distinction: "American Academy of Microbiology Fellow",
    publicCategory: "Disciplinary Society Fellowships & Field Leadership",
    internalLevel: "Level 2 / Tier 2",
    levelKey: "level2"
  },
  {
    faculty: "Sami Haddadin",
    distinction: "German Future Prize",
    publicCategory: "Global / Disciplinary Field Leadership",
    internalLevel: "Level 1C / Tier 1C",
    levelKey: "level1c"
  },
  {
    faculty: "Sami Haddadin",
    distinction: "Gottfried Wilhelm Leibniz Prize",
    publicCategory: "Global / Disciplinary Field Leadership",
    internalLevel: "Level 1C / Tier 1C",
    levelKey: "level1c"
  },
  {
    faculty: "Sami Haddadin",
    distinction: "German National Academy of Science and Engineering acatech Member",
    publicCategory: "Global / Disciplinary Field Leadership",
    internalLevel: "Level 2 / Tier 2",
    levelKey: "level2"
  },
  {
    faculty: "Sir Michael Brady",
    distinction: "Institution of Engineering and Technology IET Faraday Prize / Medal",
    publicCategory: "Global / Disciplinary Field Leadership",
    internalLevel: "Level 1C / Tier 1C",
    levelKey: "level1c"
  },
  {
    faculty: "Sir Michael Brady",
    distinction: "Royal Academy of Engineering Whittle Medal",
    publicCategory: "Global / Disciplinary Field Leadership",
    internalLevel: "Level 1C / Tier 1C",
    levelKey: "level1c"
  },
  {
    faculty: "Yoshihiko Nakamura",
    distinction: "Japan Society of Mechanical Engineers JSME Fellow",
    publicCategory: "Disciplinary Society Fellowships & Field Leadership",
    internalLevel: "Level 2 / Tier 2",
    levelKey: "level2"
  },
  {
    faculty: "Yoshihiko Nakamura",
    distinction: "JSME Medal for Distinguished Engineers",
    publicCategory: "Disciplinary Field Leadership",
    internalLevel: "Level 2 / Tier 2",
    levelKey: "level2"
  },
  {
    faculty: "Yoshihiko Nakamura",
    distinction: "IEEE Robotics and Automation Society RAS Pioneer Award",
    publicCategory: "Global / Disciplinary Field Leadership",
    internalLevel: "Level 1C / Tier 1C",
    levelKey: "level1c"
  }
];

const facultyGroupLabels = {
  academy: "Members/Fellows of National/International Academies",
  fellowshipPrize: "National/International Fellowships and Prizes",
  societyFellow: "Professional Society Fellows",
  societyLeadership: "Disciplinary Society Fellowships & Field Leadership",
  fieldLeadership: "Global / Disciplinary Field Leadership",
  disciplinaryField: "Disciplinary Field Leadership"
};

const facultyLevelLabels = {
  level1a: "Level 1A / Tier 1A",
  level1b: "Level 1B / Tier 1B",
  level1c: "Level 1C / Tier 1C",
  level2: "Level 2 / Tier 2",
  level3: "Level 3 / Tier 3",
  level4: "Level 4 / Tier 4"
};

function facultyRecord(faculty, distinction, groupKey, levelKey, options = {}) {
  return {
    faculty,
    distinction,
    organization: options.organization || "",
    routeRecognition: options.routeRecognition || distinction,
    details: options.details || "",
    work: options.work || "",
    publicCategory: options.publicCategory || facultyGroupLabels[groupKey],
    internalLevel: options.internalLevel || facultyLevelLabels[levelKey] || "",
    levelKey
  };
}

const additionalFacultyRecognitions = [
  facultyRecord("Cesare Stefanini", "Member", "academy", "level2", {
    organization: "MBR Academy of Scientists of the UAE",
    details: "2017",
    work: "Pioneering work in biorobotics, surgical microinstrumentation, and bioinspired robotic systems."
  }),
  facultyRecord("David Basin", "Member", "academy", "level2", {
    organization: "Swiss Academy of Engineering Sciences",
    details: "2020",
    work: "Foundations, methods, and tools for modeling and validating secure and reliable systems."
  }),
  facultyRecord("Eran Segal", "Member", "academy", "level2", {
    organization: "Young Israeli Academy of Sciences",
    details: "2012",
    work: "Machine learning and computational biology applied to gene regulation, microbiome, and personalized medicine."
  }),
  facultyRecord("Éric Moulines", "Member", "academy", "level2", {
    organization: "French Academy of Sciences",
    details: "2017",
    work: "Statistical learning, Bayesian inference, Monte Carlo methods, and statistical signal processing."
  }),
  facultyRecord("Fakhreddine Karray", "Fellow", "academy", "level2", {
    organization: "Canadian Academy of Engineering",
    details: "Approx. 2017-2018, verify",
    work: "Operational AI, cognitive machines, natural human-machine interaction, and intelligent transportation systems."
  }),
  facultyRecord("Xue (Steve) Liu", "Fellow", "academy", "level2", {
    organization: "Canadian Academy of Engineering",
    details: "2021",
    work: "AI, machine learning, IoT, cyber-physical systems, and mobile and green computing."
  }),
  facultyRecord("Ian Reid", "Fellow", "academy", "level2", {
    organization: "Australian Academy of Technological Sciences and Engineering (ATSE)",
    details: "2021",
    work:
      "Landmark contributions in visual geometry, tracking, SLAM, and robot navigation via computer vision."
  }),
  facultyRecord("Ian Reid", "Fellow", "academy", "level2", {
    organization: "Australian Academy of Science",
    details: "2021",
    work: "Landmark contributions in visual geometry, tracking, SLAM, and robot navigation via computer vision."
  }),
  facultyRecord("Iryna Gurevych", "Member", "academy", "level2", {
    organization: "Academia Europaea",
    details: "2025",
    work:
      "Foundational NLP research in semantic similarity, deep learning for language, and intertextuality modelling."
  }),
  facultyRecord("Nataša Pržulj", "Member", "academy", "level2", {
    organization: "Academia Europaea",
    details: "2017",
    work:
      "Invention of graphlets and biological network analysis methods applied to precision medicine."
  }),
  facultyRecord("Iryna Gurevych", "Member", "academy", "level2", {
    organization: "Leopoldina (German National Academy of Sciences)",
    details: "Year not specified",
    work:
      "Foundational NLP research in semantic similarity, deep learning for language, and intertextuality modelling."
  }),
  facultyRecord("Sami Haddadin", "Member", "academy", "level2", {
    organization: "Leopoldina (German National Academy of Sciences)",
    details: "2021",
    work:
      "Safe human-robot interaction, tactile robotics, and physical intelligence for autonomous robotic systems."
  }),
  facultyRecord("Iryna Gurevych", "Member", "academy", "level2", {
    organization: "Berlin-Brandenburg Academy of Sciences and Humanities",
    details: "2022",
    work:
      "Foundational NLP research in semantic similarity, deep learning for language, and intertextuality modelling."
  }),
  facultyRecord("Kentaro Inui", "Associate Member", "academy", "level2", {
    organization: "Science Council of Japan",
    details: "2018",
    work: "Career contributions to natural language processing, text structure analysis, and machine reading comprehension."
  }),
  facultyRecord("Nataša Pržulj", "Member", "academy", "level2", {
    organization: "Serbian Royal Academy / SKANU",
    details: "2019",
    work:
      "Invention of graphlets and biological network analysis methods applied to precision medicine."
  }),
  facultyRecord("Yoshihiko Nakamura", "Foreign Member", "academy", "level2", {
    organization: "Academy of Engineering Sciences of Serbia",
    details: "Year not specified"
  }),
  facultyRecord("Sir Michael Brady", "Fellow", "academy", "level1a", {
    organization: "Royal Academy of Engineering (UK)",
    details: "Year not specified",
    work: "Vision-based robotics and AI-driven medical image analysis for cancer diagnosis."
  }),
  facultyRecord("Sir Michael Brady", "Fellow", "academy", "level1a", {
    organization: "Academy of Medical Sciences (UK)",
    details: "Year not specified",
    work: "Vision-based robotics and AI-driven medical image analysis for cancer diagnosis."
  }),
  facultyRecord("Sir Michael Brady", "Fellow", "academy", "level1a", {
    organization: "The Royal Society (UK)",
    details: "2004",
    work: "Vision-based robotics and AI-driven medical image analysis for cancer diagnosis."
  }),
  facultyRecord("Michael I. Jordan", "Foreign Member", "academy", "level1a", {
    organization: "The Royal Society (UK)",
    details: "2020",
    work:
      "Foundational contributions to machine learning, probabilistic graphical models, and Bayesian nonparametric statistics."
  }),
  facultyRecord("Yoshihiko Nakamura", "Fellow", "academy", "level2", {
    organization: "World Academy of Art and Science (WAAS)",
    details: "Year not specified",
    work: "Contributions to humanoid robotics, cognitive robotics, and neuro-musculoskeletal human modelling."
  }),
  facultyRecord("Anil K. Jain", "Fellow", "academy", "level2", {
    organization: "The World Academy of Sciences (TWAS)",
    details: "Year not specified",
    work:
      "Contributions to the engineering and practice of biometrics, fingerprint recognition, and pattern recognition."
  }),
  facultyRecord("Michael I. Jordan", "Member", "academy", "level1a", {
    organization: "US National Academy of Sciences (NAS)",
    details: "2010",
    work:
      "Foundational contributions to machine learning, probabilistic graphical models, and Bayesian nonparametric statistics."
  }),
  facultyRecord("Michael I. Jordan", "Member", "academy", "level1a", {
    organization: "US National Academy of Engineering (NAE)",
    details: "Year not specified",
    work:
      "Foundational contributions to machine learning, probabilistic graphical models, and Bayesian nonparametric statistics."
  }),
  facultyRecord("Anil K. Jain", "Member", "academy", "level1a", {
    organization: "US National Academy of Engineering (NAE)",
    details: "2016",
    work:
      "Contributions to the engineering and practice of biometrics, fingerprint recognition, and pattern recognition."
  }),
  facultyRecord("Sir Michael Brady", "International Member", "academy", "level1a", {
    organization: "US National Academy of Engineering (NAE)",
    details: "2026",
    work: "Vision-based robotics and AI-driven medical image analysis for cancer diagnosis."
  }),
  facultyRecord("Michael I. Jordan", "Foreign Member", "academy", "level2", {
    organization: "Chinese Academy of Sciences",
    details: "Year not specified",
    work:
      "Foundational contributions to machine learning, probabilistic graphical models, and Bayesian nonparametric statistics."
  }),
  facultyRecord("Anil K. Jain", "Foreign Member", "academy", "level2", {
    organization: "Chinese Academy of Sciences",
    details: "Year not specified",
    work:
      "Contributions to the engineering and practice of biometrics, fingerprint recognition, and pattern recognition."
  }),
  facultyRecord("Anil K. Jain", "Fellow / Foreign Fellow", "academy", "level2", {
    organization: "Indian National Academy of Engineering",
    details: "Year not specified",
    work:
      "Contributions to the engineering and practice of biometrics, fingerprint recognition, and pattern recognition."
  }),
  facultyRecord("Michael I. Jordan", "Fellow", "academy", "level2", {
    organization: "American Academy of Arts and Sciences",
    details: "Year not specified",
    work:
      "Foundational contributions to machine learning, probabilistic graphical models, and Bayesian nonparametric statistics."
  }),
  facultyRecord("Michael I. Jordan", "Member", "academy", "level2", {
    organization: "Italian Academy of Engineering and Technology",
    details: "Year not specified",
    work:
      "Foundational contributions to machine learning, probabilistic graphical models, and Bayesian nonparametric statistics."
  }),
  facultyRecord("Hao Li", "Member", "academy", "level2", {
    organization: "Academy of Motion Picture Arts and Sciences (AMPAS)",
    details: "2025",
    work:
      "Real-time facial performance capture and AI-driven digital human reconstruction for film visual effects."
  }),
  facultyRecord("Sami Haddadin", "Member", "academy", "level2", {
    organization: "German National Academy of Science and Engineering (acatech)",
    details: "Year not specified"
  }),
  facultyRecord("Carlos D. Bustamante", "MacArthur Fellowship", "fellowshipPrize", "level2", {
    details: "2010",
    work:
      "Mining DNA sequence data to understand human genetic diversity, population migration, and mechanisms of evolution."
  }),
  facultyRecord("Anil K. Jain", "Guggenheim Fellowship", "fellowshipPrize", "level2", {
    details: "2001",
    work: "Research in pattern recognition and computer vision."
  }),
  facultyRecord("Anil K. Jain", "Humboldt Research Award", "fellowshipPrize", "level2", {
    details: "2002",
    work: "Foundational contributions to fingerprint and biometric recognition systems."
  }),
  facultyRecord("Eric P. Xing", "Sloan Research Fellowship", "fellowshipPrize", "level3", {
    details: "2008-2010",
    work:
      "Early-career contributions to machine learning algorithms, probabilistic graphical models, and statistical genomics."
  }),
  facultyRecord("Carlos D. Bustamante", "Sloan Research Fellowship", "fellowshipPrize", "level3", {
    details: "2007-2009",
    work: "Statistical methods for inferring human evolutionary history and population genetics from DNA."
  }),
  facultyRecord("Ivan Laptev", "Helmholtz Prize (ICCV Test-of-Time)", "fellowshipPrize", "level1c", {
    details: "2017",
    work:
      'Seminal "Space-Time Interest Points" paper, which introduced STIPs as a foundational technique for video understanding and action recognition.'
  }),
  facultyRecord("Michael I. Jordan", "BBVA Foundation Frontiers of Knowledge Award", "fellowshipPrize", "level1b", {
    routeRecognition: "BBVA Frontiers of Knowledge Award",
    details: "2024",
    work:
      "Unified algorithms for statistical and probabilistic inference underpinning modern AI."
  }),
  facultyRecord("Anil K. Jain", "BBVA Foundation Frontiers of Knowledge Award", "fellowshipPrize", "level1b", {
    routeRecognition: "BBVA Frontiers of Knowledge Award",
    details: "2024",
    work: "Core contributions to machine learning that powered the development of biometrics."
  }),
  facultyRecord("Michael I. Jordan", "IEEE John von Neumann Medal", "fellowshipPrize", "level1c", {
    details: "2020",
    work: "Contributions to machine learning and statistics."
  }),
  facultyRecord("Eran Segal", "Overton Prize", "fellowshipPrize", "level1c", { details: "2012" }),
  facultyRecord("Michael I. Jordan", "IJCAI Award for Research Excellence", "fellowshipPrize", "level1c", {
    details: "2016",
    work: "Career-long contributions to AI and machine learning."
  }),
  facultyRecord("Michael I. Jordan", "ACM/AAAI Allen Newell Award", "fellowshipPrize", "level1c", {
    details: "2009",
    work: "Fundamental advances in machine learning, graphical models, and nonparametric Bayesian statistics."
  }),
  facultyRecord("Michael I. Jordan", "World Laureates Association Prize", "fellowshipPrize", "level1b", {
    details: "2022",
    work: "Pioneering contributions to machine learning."
  }),
  facultyRecord("Michael I. Jordan", "David E. Rumelhart Prize", "fellowshipPrize", "level1c", {
    routeRecognition: "Rumelhart Prize",
    details: "2015",
    work: "Foundational contributions to connectionist models of cognition."
  }),
  facultyRecord("Michael I. Jordan", "AAAI Feigenbaum Prize", "fellowshipPrize", "level1c", { details: "Year not specified" }),
  facultyRecord("Michael I. Jordan", "COPSS Presidents' Award", "fellowshipPrize", "level1c", {
    details: "1995",
    work: "Outstanding early-career contributions to statistics."
  }),
  facultyRecord("Michael I. Jordan", "Ulf Grenander Prize", "fellowshipPrize", "level1c", {
    routeRecognition: "AMS Ulf Grenander Prize in Stochastic Theory and Modeling",
    details: "2021"
  }),
  facultyRecord("Eran Segal", "Michael Bruno Award", "fellowshipPrize", "level2", { details: "Year not specified" }),
  facultyRecord("Mladen Kolar", "Leo Breiman Junior Award", "fellowshipPrize", "level3", { details: "2024" }),
  facultyRecord("Michael I. Jordan", "IEEE Fellow", "societyFellow", "level2", { details: "Year not specified" }),
  facultyRecord("Anil K. Jain", "IEEE Fellow", "societyFellow", "level2", { details: "2018" }),
  facultyRecord("Eric P. Xing", "IEEE Fellow", "societyFellow", "level2", { details: "2019" }),
  facultyRecord("Chih-Jen Lin", "IEEE Fellow", "societyFellow", "level2", { details: "2011" }),
  facultyRecord("Xue (Steve) Liu", "IEEE Fellow", "societyFellow", "level2", { details: "Year not specified" }),
  facultyRecord("David Basin", "IEEE Fellow", "societyFellow", "level2", { details: "2020" }),
  facultyRecord("Fakhreddine Karray", "IEEE Fellow", "societyFellow", "level2", { details: "Life Fellow, 2020" }),
  facultyRecord("Gregory Chirikjian", "IEEE Fellow", "societyFellow", "level2", { details: "2010" }),
  facultyRecord("Sami Haddadin", "IEEE Fellow", "societyFellow", "level2", { details: "Year not specified" }),
  facultyRecord("Yoshihiko Nakamura", "IEEE Fellow", "societyFellow", "level2", { details: "Life Fellow, year not specified" }),
  facultyRecord("Mohsen Guizani", "IEEE Fellow", "societyFellow", "level2", { details: "2009" }),
  facultyRecord("Michael I. Jordan", "ACM Fellow", "societyFellow", "level2", { details: "1999" }),
  facultyRecord("Anil K. Jain", "ACM Fellow", "societyFellow", "level2", { details: "2017" }),
  facultyRecord("Elizabeth Churchill", "ACM Fellow", "societyFellow", "level2", { details: "2020" }),
  facultyRecord("Eric P. Xing", "ACM Fellow", "societyFellow", "level2", { details: "2024" }),
  facultyRecord("Chih-Jen Lin", "ACM Fellow", "societyFellow", "level2", { details: "2019" }),
  facultyRecord("David Basin", "ACM Fellow", "societyFellow", "level2", { details: "2018" }),
  facultyRecord("Michael I. Jordan", "AAAS Fellow", "societyFellow", "level2", { details: "Year not specified" }),
  facultyRecord("Anil K. Jain", "AAAS Fellow", "societyFellow", "level2", { details: "Year not specified" }),
  facultyRecord("Peter Song", "AAAS Fellow", "societyFellow", "level2", { details: "2025" }),
  facultyRecord("Sir Michael Brady", "AAAI Fellow", "societyFellow", "level2", { details: "1990" }),
  facultyRecord("Michael I. Jordan", "AAAI Fellow", "societyFellow", "level2", { details: "1998" }),
  facultyRecord("Eric P. Xing", "AAAI Fellow", "societyFellow", "level2", { details: "2022" }),
  facultyRecord("Chih-Jen Lin", "AAAI Fellow", "societyFellow", "level2", { details: "Year not specified" }),
  facultyRecord("Michael I. Jordan", "IMS Fellow", "societyFellow", "level2", { details: "1998" }),
  facultyRecord("Eric P. Xing", "IMS Fellow", "societyFellow", "level2", { details: "2023" }),
  facultyRecord("Peter Song", "IMS Fellow", "societyFellow", "level2", { details: "Year not specified" }),
  facultyRecord("Haiyan Huang", "IMS Fellow", "societyFellow", "level2", { details: "2022" }),
  facultyRecord("Éric Moulines", "IMS Fellow", "societyFellow", "level2", { details: "Year not specified" }),
  facultyRecord("Mladen Kolar", "IMS Fellow", "societyFellow", "level2", { details: "2026" }),
  facultyRecord("Michael I. Jordan", "ASA Fellow", "societyFellow", "level2", { details: "2007" }),
  facultyRecord("Eric P. Xing", "ASA Fellow", "societyFellow", "level2", { details: "2022" }),
  facultyRecord("Hongyuan Cao", "ASA Fellow", "societyFellow", "level2", { details: "2024" }),
  facultyRecord("Haiyan Huang", "ASA Fellow", "societyFellow", "level2", { details: "2022" }),
  facultyRecord("Peter Song", "ASA Fellow", "societyFellow", "level2", { details: "2018" }),
  facultyRecord("Gregory Chirikjian", "ASME Fellow", "societyFellow", "level2", { details: "2008" }),
  facultyRecord("Iryna Gurevych", "ACL Fellow", "societyFellow", "level2", { details: "2020" }),
  facultyRecord("Eric P. Xing", "ISCB Fellow", "societyFellow", "level2", { details: "2026" }),
  facultyRecord("Eran Segal", "ISCB Fellow", "societyFellow", "level2", { details: "2026" }),
  facultyRecord("Nataša Pržulj", "ISCB Fellow", "societyFellow", "level2", { details: "2024" }),
  facultyRecord("Nataša Pržulj", "British Computer Society Fellow", "societyFellow", "level2", {
    routeRecognition: "BCS Fellow",
    details: "Year not specified"
  }),
  facultyRecord("Sir Michael Brady", "British Computer Society Fellow", "societyFellow", "level2", {
    routeRecognition: "BCS Fellow",
    details: "Year not specified"
  })
];

function facultyRecordKey(record) {
  return normalizeText(`${record.faculty} ${record.distinction}`);
}

function normalizeFacultyRecognitionRecord(record) {
  return {
    ...record,
    details: record.details || "",
    work: record.work || "",
    organization: record.organization || "",
    routeRecognition: record.routeRecognition || record.distinction,
    publicCategory: record.publicCategory || facultyGroupLabels.disciplinaryField,
    internalLevel: record.internalLevel || facultyLevelLabels[record.levelKey] || ""
  };
}

const replacedLegacyFacultyKeys = new Set(
  [
    "Ian Reid Australian Academy of Technological Sciences and Engineering ATSE Fellow",
    "Michael Jordan IJCAI Award for Research Excellence",
    "Michael Jordan AMS Ulf Grenander Prize in Stochastic Theory and Modeling",
    "Sami Haddadin German National Academy of Science and Engineering acatech Member"
  ].map(normalizeText)
);

const facultyRecognitions = [
  ...legacyFacultyRecognitions.filter((record) => !replacedLegacyFacultyKeys.has(facultyRecordKey(record))),
  ...additionalFacultyRecognitions
].map(normalizeFacultyRecognitionRecord);

const app = document.querySelector("#app");

function icon(name, className = "icon") {
  return `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.arrowRight}</svg>`;
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getCategory(id) {
  return categories.find((category) => category.id === id);
}

function recognitionCount(category) {
  return (category.items || []).reduce((total, item) => total + recognitionOptions(item).length, 0);
}

function bodyCount(category) {
  return category.items?.length || 0;
}

function allInstitutions() {
  return categories.flatMap((category) =>
    (category.items || []).map((item, itemIndex) => ({
      ...item,
      itemIndex,
      categoryId: category.id,
      category: category.title,
      categoryNumber: category.number,
      recognitionTypes: recognitionOptions(item),
      tierKeys: tierKeysForItem(item, category)
    }))
  );
}

function allRecognitions() {
  return categories.flatMap((category) =>
    (category.items || []).flatMap((item, itemIndex) =>
      recognitionOptions(item).map((recognition, recognitionIndex) => ({
        organization: item.organization,
        recognition,
        note: item.note,
        website: item.website,
        logoUrl: item.logoUrl,
        logoFit: item.logoFit,
        logoDomains: item.logoDomains,
        tierKey: tierForRecognition(item, recognition, category),
        itemIndex,
        recognitionIndex,
        categoryId: category.id,
        category: category.title
      }))
    )
  );
}

function recognitionOptions(item) {
  if (Array.isArray(item.recognitions)) {
    return item.recognitions;
  }

  return String(item.recognition || "")
    .split(";")
    .map((option) => option.trim())
    .filter(Boolean);
}

function recognitionTypeLabel(recognition) {
  const value = recognition.toLowerCase();

  if (value.includes("fellowship")) return "Fellowship";
  if (value.includes("fellow")) return "Fellow recognition";
  if (value.includes("member")) return "Membership recognition";
  if (value.includes("medal")) return "Medal";
  if (value.includes("prize")) return "Prize";
  if (value.includes("award")) return "Award";
  if (value.includes("grant")) return "Grant";
  if (value.includes("editor")) return "Editorial leadership";
  if (value.includes("chair")) return "Conference leadership";

  return "Recognition";
}

function normalizeText(value = "") {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function hasAny(value, terms) {
  return terms.some((term) => value.includes(term));
}

function tierForRecognition(item, recognition, category) {
  if (item?.tierKey) return item.tierKey;

  const text = normalizeText(`${item.organization} ${recognition}`);
  const recognitionText = normalizeText(recognition);

  if (
    hasAny(recognitionText, [
      "nobel prize",
      "turing award",
      "fields medal"
    ])
  ) {
    return "level1a";
  }

  if (
    hasAny(recognitionText, [
      "bbva frontiers of knowledge award",
      "breakthrough prize",
      "lasker award",
      "wolf prize",
      "world laureates association prize"
    ])
  ) {
    return "level1b";
  }

  if (
    hasAny(recognitionText, [
      "acm aaai allen newell award",
      "ieee john von neumann medal",
      "copss presidents award",
      "overton prize",
      "rumelhart prize",
      "helmholtz prize",
      "w wallace mcdowell award",
      "ras pioneer award",
      "king sun fu prize",
      "levchin prize",
      "royal society milner award",
      "whittle medal",
      "ijcai award for research excellence",
      "ulf grenander prize",
      "gottfried wilhelm leibniz prize",
      "german future prize",
      "faraday prize",
      "faraday medal",
      "aaai feigenbaum prize"
    ])
  ) {
    return "level1c";
  }

  if (
    hasAny(recognitionText, [
      "macarthur fellowship",
      "guggenheim fellowship",
      "humboldt research award",
      "iapr fellow",
      "spie fellow",
      "embo member",
      "cnrs silver medal",
      "orange prize",
      "eurasip fellow",
      "asme machine design award",
      "german cancer prize",
      "van niel international prize",
      "american academy of microbiology fellow",
      "michael bruno award",
      "editor for leading journals",
      "senior editor",
      "program chair"
    ])
  ) {
    return "level2";
  }

  if (
    hasAny(recognitionText, [
      "sloan research",
      "fulbright u s scholar",
      "distinguished scholar awards",
      "erc advanced",
      "consolidator grant",
      "nih r01",
      "wellcome trust investigator awards",
      "leo breiman junior award"
    ])
  ) {
    return "level3";
  }

  if (
    hasAny(text, [
      "ieee fellow",
      "acm fellow",
      "aaai fellow",
      "aaas fellow",
      "ims fellow",
      "acl fellow",
      "iscb fellow",
      "asme fellow",
      "bcs fellow",
      "asa fellow"
    ])
  ) {
    return "level2";
  }

  if (category.id === "leading-national-academies") return "level1a";
  if (category.id === "other-national-academies") return "level2";

  return null;
}

function tierBadge(tierKey) {
  const tier = tierDefinitions[tierKey];
  if (!tier) return "";

  return `<span class="tier-badge ${tierKey}" title="${escapeHtml(`${tier.title}: ${tier.definition}`)}">${escapeHtml(tier.label)}</span>`;
}

function tierLabel(tierKey) {
  const tier = tierDefinitions[tierKey];
  return tier ? `${tier.label}: ${tier.title}` : "Not leveled";
}

function tierKeysForItem(item, category) {
  return [
    ...new Set(
      recognitionOptions(item)
        .map((recognition) => tierForRecognition(item, recognition, category))
        .filter(Boolean)
    )
  ];
}

function tierBadgeGroup(item, category) {
  const keys = tierKeysForItem(item, category);
  return keys.map((key) => tierBadge(key)).join("");
}

function domainFromWebsite(value = "") {
  try {
    const normalized = value.startsWith("http") ? value : `https://${value}`;
    return new URL(normalized).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

function logoDomainsFor(item) {
  if (Array.isArray(item.logoDomains) && item.logoDomains.length) {
    return item.logoDomains.map(domainFromWebsite).filter(Boolean);
  }

  const domain = domainFromWebsite(item.website || "");
  return domain ? [domain] : [];
}

function initials(value = "") {
  const ignored = new Set(["and", "of", "the", "for", "in", "uk", "us"]);
  const words = value
    .replace(/\([^)]*\)/g, " ")
    .replace(/[^a-zA-Z0-9 ]/g, " ")
    .split(/\s+/)
    .filter((word) => word && !ignored.has(word.toLowerCase()));

  return (words[0]?.[0] || "I") + (words[1]?.[0] || "");
}

function institutionLogo(item, size = "card") {
  const logos = Array.isArray(item.logos) ? item.logos : [];
  const domains = logoDomainsFor(item);
  const fallback = escapeHtml(initials(item.organization));
  const logoFit = item.logoFit ? ` logo-${item.logoFit}` : "";

  if (logos.length) {
    return `
      <span class="institution-logo ${size} logo-stack rich-logo-stack" aria-label="${escapeHtml(item.organization)} logos">
        ${logos
          .slice(0, 4)
          .map(
            (logo, index) => `
            <span class="logo-unit" style="--i: ${index}" title="${escapeHtml(logo.label || item.organization)}">
              <span class="logo-initials">${escapeHtml(initials(logo.label || item.organization))}</span>
              <img src="${escapeHtml(logo.src)}" alt="" loading="lazy" onerror="this.hidden=true" />
            </span>
          `
          )
          .join("")}
      </span>
    `;
  }

  if (item.logoUrl) {
    return `
      <span class="institution-logo ${size}${logoFit}" aria-label="${escapeHtml(item.organization)} logo">
        <span class="logo-initials">${fallback}</span>
        <img src="${escapeHtml(item.logoUrl)}" alt="" loading="lazy" onerror="this.hidden=true" />
      </span>
    `;
  }

  if (!domains.length) {
    return `<span class="institution-logo ${size}"><span class="logo-initials">${fallback}</span></span>`;
  }

  if (domains.length > 1) {
    return `
      <span class="institution-logo ${size} logo-stack" aria-label="${escapeHtml(item.organization)} logos">
        ${domains
          .slice(0, 4)
          .map(
            (domain, index) => `
            <span class="logo-unit" style="--i: ${index}">
              <span class="logo-initials">${escapeHtml(initials(domain))}</span>
              <img src="https://www.google.com/s2/favicons?sz=96&domain=${encodeURIComponent(domain)}" alt="" loading="lazy" onerror="this.hidden=true" />
            </span>
          `
          )
          .join("")}
      </span>
    `;
  }

  const domain = domains[0];
  return `
    <span class="institution-logo ${size}" aria-label="${escapeHtml(item.organization)} logo">
      <span class="logo-initials">${fallback}</span>
      <img src="https://www.google.com/s2/favicons?sz=96&domain=${encodeURIComponent(domain)}" alt="" loading="lazy" onerror="this.hidden=true" />
    </span>
  `;
}

function render() {
  const hash = window.location.hash || "#home";
  const [route, value, extra, detail] = hash.replace("#", "").split("/");

  if (route === "category" && value) {
    renderCategory(value);
  } else if (route === "recognition" && value && extra !== undefined) {
    renderRecognition(value, Number(extra));
  } else if (route === "criteria" && value && extra !== undefined && detail !== undefined) {
    renderRecognitionCriteria(value, Number(extra), Number(detail));
  } else if (route === "faculty") {
    renderFacultyPage();
  } else if (route === "institutions" || route === "categories") {
    renderCategoriesPage();
  } else if (route === "directory") {
    renderDirectoryPage();
  } else {
    renderHome();
  }

  updateActiveNavigation(route || "home", value);
  app.focus({ preventScroll: true });
}

function updateActiveNavigation(route, value) {
  document.querySelectorAll("[data-nav]").forEach((link) => link.classList.remove("active"));

  const primaryRoute =
    route === "directory"
      ? "directory"
      : route === "faculty"
        ? "faculty"
        : route === "home"
          ? "home"
          : "institutions";
  document.querySelector(`[data-nav="${primaryRoute}"]`)?.classList.add("active");

}

function renderHome() {
  app.innerHTML = `
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-copy">
          <p class="eyebrow">Academic recognition map</p>
          <h1>Academic Distinctions Portal</h1>
          <p>
            A dashboard to organize academies, fellowships, awards, funding-body honors,
            association recognition, and editorial or conference leadership.
          </p>
        </div>
      </div>
    </section>

    <section class="band" id="categories">
      <div class="section-inner">
        <div class="section-heading">
          <div>
            <h2>Recognition Categories</h2>
            <p>Each category contains the relevant academies, fellowships, awards, funding bodies, and leadership roles.</p>
          </div>
        </div>
        ${categoryGrid(categories)}
      </div>
    </section>
  `;
}

function renderCategoriesPage() {
  const institutions = allInstitutions();

  app.innerHTML = `
    <section class="band compact">
      <div class="section-inner">
        <div class="section-heading">
          <div>
            <h2>Institutions</h2>
            <p>Browse the organizations, academies, societies, foundations, funders, journals, and conferences in the dashboard.</p>
          </div>
        </div>
        <div class="toolbar">
          <label class="search" for="category-search">
            ${icon("search")}
            <input id="category-search" type="search" placeholder="Search institutions" autocomplete="off" />
          </label>
        </div>
        <div id="category-results">
          ${institutionGrid(institutions)}
        </div>
      </div>
    </section>
  `;

  const search = document.querySelector("#category-search");
  search.addEventListener("input", () => {
    const query = search.value.trim().toLowerCase();
    const filtered = institutions.filter((item) =>
      [item.category, item.organization, item.note, item.recognitionTypes.join(" ")]
        .join(" ")
        .toLowerCase()
        .includes(query)
    );
    document.querySelector("#category-results").innerHTML = institutionGrid(query ? filtered : institutions);
  });
}

function institutionGrid(items) {
  if (!items.length) {
    return `
      <div class="empty-state">
        <div>
          <strong>No matching institutions</strong>
          <span>Try a broader search term.</span>
        </div>
      </div>
    `;
  }

  return `
    <div class="recognition-list institution-directory">
      ${items
        .map(
          (item) => `
          <a class="recognition-card" href="#recognition/${item.categoryId}/${item.itemIndex}">
            <div class="institution-card-head">
              ${institutionLogo(item)}
              <div class="tag-cluster">
                ${item.tierKeys.map((key) => tierBadge(key)).join("")}
              </div>
            </div>
            <h3>${escapeHtml(item.organization)}</h3>
            <p>${escapeHtml(item.recognitionTypes.join("; "))}</p>
            <span class="card-link">Open institution ${icon("arrowRight")}</span>
          </a>
        `
        )
        .join("")}
    </div>
  `;
}

function searchResultsView(categoryMatches, recognitionMatches, query) {
  if (!categoryMatches.length && !recognitionMatches.length) {
    return `
      <div class="empty-state">
        <div>
          <strong>No matches for "${escapeHtml(query)}"</strong>
          <span>Try searching by academy, award, fellowship, organization, or institution.</span>
        </div>
      </div>
    `;
  }

  return `
    <div class="search-results">
      ${
        recognitionMatches.length
          ? `
          <section>
            <h3>Recognition Matches</h3>
            <div class="recognition-list">
              ${recognitionMatches
                .map(
                  (item) => `
                  <a class="recognition-card" href="#criteria/${item.categoryId}/${item.itemIndex}/${item.recognitionIndex}">
                    <div class="institution-card-head">
                      ${institutionLogo(item)}
                      <div class="tag-cluster">
                        ${tierBadge(item.tierKey)}
                        <span class="note-chip">${escapeHtml(item.category)}</span>
                      </div>
                    </div>
                    <h3>${escapeHtml(item.organization)}</h3>
                    <p>${escapeHtml(item.recognition)}</p>
                    ${item.note ? `<span class="note-chip">${escapeHtml(item.note)}</span>` : ""}
                    <span class="card-link">Open criteria ${icon("arrowRight")}</span>
                  </a>
                `
                )
                .join("")}
            </div>
          </section>
        `
          : ""
      }
      ${
        categoryMatches.length
          ? `
          <section>
            <h3>Institution Matches</h3>
            ${categoryGrid(categoryMatches)}
          </section>
        `
          : ""
      }
    </div>
  `;
}

function categoryGrid(items) {
  if (!items.length) {
    return `
      <div class="empty-state">
        <div>
          <strong>No matching institutions</strong>
          <span>Try a broader search term.</span>
        </div>
      </div>
    `;
  }

  return `
    <div class="category-grid">
      ${items
        .map(
          (category) => `
          <a class="category-card" style="--accent: ${category.accent}" href="#category/${category.id}">
            <div>
              <div class="card-kicker">
                <span>${category.number}</span>
                <span class="category-icon">${icon(category.icon)}</span>
              </div>
              <h3>${escapeHtml(category.title)}</h3>
              <p>${escapeHtml(category.definition)}</p>
            </div>
            <div class="card-footer">
              <span>Open section</span>
              <span class="count-pill">${bodyCount(category)} bodies</span>
            </div>
          </a>
        `
        )
        .join("")}
    </div>
  `;
}

function renderCategory(id) {
  const category = getCategory(id);
  if (!category) {
    renderCategoriesPage();
    return;
  }

  app.innerHTML = `
    <section class="band compact">
      <div class="section-inner">
        <div class="view-top">
          <div class="view-title">
            <a class="icon-button" href="#institutions" aria-label="Back to institutions">${icon("back")}</a>
            <p class="eyebrow" style="color: var(--muted); margin-top: 1.2rem">${category.number}</p>
            <h1>${escapeHtml(category.title)}</h1>
            <p>${escapeHtml(category.definition)}</p>
            <div class="view-meta">
              <span class="meta-chip">${bodyCount(category)} bodies</span>
              <span class="meta-chip">${recognitionCount(category)} recognition types</span>
              <span class="meta-chip">Definition pending final wording</span>
            </div>
          </div>
          <div class="toolbar">
            <button class="button light" type="button" data-export="${category.id}">${icon("download")}Export section</button>
          </div>
        </div>

        <section class="panel">
          <div class="panel-body">
            <div class="section-heading">
              <div>
                <h2>Organizations and Awarding Bodies</h2>
                <p>Each card is the body in this institution group. Open it to view the specific recognition types it confers.</p>
              </div>
            </div>
            ${recognitionList(category)}
          </div>
        </section>
      </div>
    </section>
  `;
}

function recognitionList(category) {
  const items = category.items || [];

  if (!items.length) {
    return `
      <div class="empty-state">
        <div>
          <strong>No recognitions listed yet</strong>
          <span>Add the relevant academies, fellowships, awards, or leadership roles.</span>
        </div>
      </div>
    `;
  }

  return `
    <div class="recognition-list">
      ${items
        .map(
          (item, index) => `
          <a class="recognition-card" href="#recognition/${category.id}/${index}">
            <div class="institution-card-head">
              ${institutionLogo(item)}
              <div class="tag-cluster">
                ${tierBadgeGroup(item, category)}
              </div>
            </div>
            <h3>${escapeHtml(item.organization)}</h3>
            <p>${escapeHtml(item.recognition)}</p>
            ${item.note ? `<span class="note-chip">${escapeHtml(item.note)}</span>` : ""}
            <span class="card-link">Open body ${icon("arrowRight")}</span>
          </a>
        `
        )
        .join("")}
    </div>
  `;
}

function renderRecognition(categoryId, index) {
  const category = getCategory(categoryId);
  const item = category?.items?.[index];
  const options = item ? recognitionOptions(item) : [];

  if (!category || !item) {
    renderCategoriesPage();
    return;
  }

  app.innerHTML = `
    <section class="band compact">
      <div class="section-inner">
        <div class="view-top">
          <div class="view-title">
            <a class="icon-button" href="#category/${category.id}" aria-label="Back to ${escapeHtml(category.title)}">${icon("back")}</a>
            <div class="title-lockup">
              ${institutionLogo(item, "large")}
              <div>
                <p class="eyebrow" style="color: var(--muted); margin-top: 1.2rem">${escapeHtml(category.title)}</p>
                <h1>${escapeHtml(item.organization)}</h1>
                <p>Select a specific recognition type to open its full criteria profile.</p>
                <div class="view-meta">
                  <span class="meta-chip">Awarding body</span>
                  <span class="meta-chip">${options.length} recognition type${options.length === 1 ? "" : "s"}</span>
                  ${item.note ? `<span class="meta-chip">${escapeHtml(item.note)}</span>` : ""}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="detail-grid">
          <section class="panel">
            <div class="panel-body">
              <h2>Body Information</h2>
              <dl class="info-list">
                <dt>Organization</dt>
                <dd><span class="inline-logo-text">${institutionLogo(item, "tiny")}${escapeHtml(item.organization)}</span></dd>
                <dt>Recognition Types</dt>
                <dd>${escapeHtml(options.join("; "))}</dd>
                <dt>Institution</dt>
                <dd>${escapeHtml(category.title)}</dd>
                ${
                  item.note
                    ? `<dt>Note</dt><dd>${escapeHtml(item.note)}</dd>`
                    : ""
                }
              </dl>
            </div>
          </section>

          <section class="panel criteria-detail-panel">
            <div class="panel-body">
              <div class="section-heading">
                <div>
                  <h2>Awarding Body Profile</h2>
                  <p>Organization-level information about this body, separate from the recognitions it confers.</p>
                </div>
              </div>
              ${bodyProfile(item, category)}
            </div>
          </section>

          <section class="panel criteria-detail-panel">
            <div class="panel-body">
              <div class="section-heading">
                <div>
                  <h2>Recognition Types</h2>
                  <p>These are the recognitions conferred by this body. Open one to view its criteria profile.</p>
                </div>
              </div>
              ${recognitionTypeList(item, category, index)}
            </div>
          </section>
        </div>
      </div>
    </section>
  `;
}

function bodyProfile(item, category) {
  const rows =
    item.bodyProfileRows ||
    bodyProfileFields.map((field) => ({
      field,
      value: bodyProfileValue(field, item, category)
    }));

  return `
    <div class="body-profile">
      ${rows
        .map(
          (row) => `
          <article class="body-profile-row">
            <h3>${escapeHtml(row.field)}</h3>
            <div class="profile-value">${formatProfileValue(row.value)}</div>
          </article>
        `
        )
        .join("")}
    </div>
  `;
}

function formatBodyProfileValue(field, item, category) {
  return formatProfileValue(bodyProfileValue(field, item, category));
}

function formatProfileValue(value) {
  const text = String(value || "To be completed");

  if (text.startsWith("http")) {
    return `<a href="${escapeHtml(text)}" target="_blank" rel="noreferrer">${escapeHtml(text)}</a>`;
  }

  const points = compactProfilePoints(text);
  if (points.length > 1) {
    return `
      <ul class="compact-info-list">
        ${points.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}
      </ul>
    `;
  }

  return escapeHtml(text);
}

function compactProfilePoints(text) {
  const normalized = String(text || "").replace(/\s+/g, " ").trim();
  if (normalized.length < 145) return [normalized];

  const protectedText = normalized
    .replace(/\bU\.S\./g, "US")
    .replace(/\bA\.M\./g, "AM")
    .replace(/\bD\./g, "D");
  const parts = protectedText
    .split(/(?<=[.!?])\s+/)
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) =>
      part
        .replace(/\bUS\b/g, "U.S.")
        .replace(/\bAM\b/g, "A.M.")
        .replace(/\bD\b/g, "D.")
    );

  return parts.length > 1 ? parts : [normalized];
}

function bodyProfileValue(field, item, category) {
  const profile = item.bodyProfile || {};
  const values = {
    "Official Name": profile.officialName || item.organization,
    "Organization Type": profile.organizationType || inferredBodyType(category),
    Definition: profile.definition || "To be completed",
    "History/Background": profile.historyBackground || "To be completed",
    Purpose: profile.purpose || "To be completed",
    Mission: profile.mission || "To be completed",
    "Governance/Leadership": profile.governanceLeadership || "To be completed",
    "Scope/Reach": profile.scopeReach || "To be completed",
    "Recognition Types": recognitionOptions(item).join("; "),
    Source: profile.source || item.website || "To be completed"
  };

  return values[field] || "To be completed";
}

function inferredBodyType(category) {
  const labels = {
    "leading-national-academies": "Leading national academy",
    "other-national-academies": "National academy or learned body",
    "professional-and-scholarly-associations": "Professional or scholarly association",
    "private-foundations": "Private foundation",
    "government-and-philanthropic-funding-bodies": "Government or philanthropic funding body",
    "international-bodies": "International body",
    "editorial-and-conference-leadership": "Journal, conference, or scholarly leadership venue"
  };

  return labels[category.id] || category.title;
}

function recognitionTypeList(item, category, itemIndex) {
  return `
    <div class="recognition-type-list">
      ${recognitionOptions(item)
        .map(
          (recognition, recognitionIndex) => `
          <a class="recognition-type-card" href="#criteria/${category.id}/${itemIndex}/${recognitionIndex}">
            <div class="tag-cluster">
              ${tierBadge(tierForRecognition(item, recognition, category))}
              <span class="note-chip">${escapeHtml(recognitionTypeLabel(recognition))}</span>
            </div>
            <h3>${escapeHtml(recognition)}</h3>
            <p>${escapeHtml(item.organization)}</p>
            <span class="card-link">Open criteria ${icon("arrowRight")}</span>
          </a>
        `
        )
        .join("")}
    </div>
  `;
}

function renderRecognitionCriteria(categoryId, itemIndex, recognitionIndex) {
  const category = getCategory(categoryId);
  const item = category?.items?.[itemIndex];
  const selectedRecognition = item ? recognitionOptions(item)[recognitionIndex] : null;
  const selectedTier = item && selectedRecognition ? tierForRecognition(item, selectedRecognition, category) : null;
  const backHref = `#recognition/${category?.id}/${itemIndex}`;
  const backLabel = `Back to ${item ? item.organization : "recognition"}`;

  if (!category || !item || !selectedRecognition) {
    renderCategoriesPage();
    return;
  }

  app.innerHTML = `
    <section class="band compact">
      <div class="section-inner">
        <div class="view-top">
          <div class="view-title">
            <a class="icon-button" href="${backHref}" aria-label="${escapeHtml(backLabel)}">${icon("back")}</a>
            <p class="eyebrow" style="color: var(--muted); margin-top: 1.2rem">${escapeHtml(item.organization)}</p>
            <h1>${escapeHtml(selectedRecognition)}</h1>
            <p>${escapeHtml(recognitionTypeLabel(selectedRecognition))} from ${escapeHtml(item.organization)}.</p>
            <div class="view-meta">
              ${tierBadge(selectedTier)}
              <span class="meta-chip">${escapeHtml(recognitionTypeLabel(selectedRecognition))}</span>
              <span class="meta-chip">${escapeHtml(category.title)}</span>
              ${item.note ? `<span class="meta-chip">${escapeHtml(item.note)}</span>` : ""}
            </div>
          </div>
        </div>

        <div class="detail-grid">
          <aside class="panel definition-panel">
            <div class="panel-body">
              <h2>Recognition Summary</h2>
              <dl class="info-list">
                <dt>Recognition</dt>
                <dd>${escapeHtml(selectedRecognition)}</dd>
                <dt>Awarding Body</dt>
                <dd><span class="inline-logo-text">${institutionLogo(item, "tiny")}${escapeHtml(item.organization)}</span></dd>
                <dt>Level</dt>
                <dd>${tierBadge(selectedTier)}</dd>
                <dt>Institution</dt>
                <dd>${escapeHtml(category.title)}</dd>
                ${item.note ? `<dt>Note</dt><dd>${escapeHtml(item.note)}</dd>` : ""}
              </dl>
            </div>
          </aside>

          <section class="panel criteria-detail-panel">
            <div class="panel-body">
              <div class="section-heading">
                <div>
                  <h2>Criteria Profile</h2>
                  <p>Use this structure to complete the research profile for this specific recognition.</p>
                </div>
              </div>
              ${mbzuaiRecipientSection(item, selectedRecognition)}
              ${recognitionCriteriaProfile(item, category, selectedRecognition)}
            </div>
          </section>
        </div>
      </div>
    </section>
  `;
}

function mbzuaiRecipientSection(item, selectedRecognition) {
  const matches = facultyRecordsForRecognition(item, selectedRecognition);

  return `
    <article class="mbzuai-recipient-panel">
      <div>
        <h2>MBZUAI Recipient or Member</h2>
        <p>${matches.length ? `${matches.length} faculty record${matches.length === 1 ? "" : "s"} linked to this recognition.` : "No MBZUAI faculty recipient or member listed yet."}</p>
      </div>
      ${
        matches.length
          ? `
            <ul class="mbzuai-recipient-list">
              ${matches
                .map(
                  (record) => `
                  <li>
                    <div class="recipient-main-line">
                      <strong>${escapeHtml(record.faculty)}</strong>
                      ${record.details ? `<span>${escapeHtml(record.details)}</span>` : ""}
                      ${tierBadge(record.levelKey)}
                    </div>
                    ${record.work ? `<p><strong>Related work:</strong> ${escapeHtml(record.work)}</p>` : ""}
                  </li>
                `
                )
                .join("")}
            </ul>
          `
          : ""
      }
    </article>
  `;
}

function recognitionCriteriaProfile(item, category, selectedRecognition) {
  return `
    <div class="criteria-profile">
      ${recognitionCriteriaSections
        .map(
          (section, index) => `
          <article class="criteria-section">
            <header>
              <span>${index + 1}</span>
              <h3>${escapeHtml(section.title)}</h3>
            </header>
            <dl>
              ${section.fields
                .map(
                  (field) => `
                  <dt>${escapeHtml(field)}</dt>
                  <dd>${criteriaFieldDisplay(field, item, category, selectedRecognition)}</dd>
                `
                )
                .join("")}
            </dl>
          </article>
        `
        )
        .join("")}
    </div>
  `;
}

function criteriaFieldDisplay(field, item, category, selectedRecognition) {
  const customProfile = recognitionProfileFor(item, selectedRecognition);

  if (field === "Notable Past Recipients" && Array.isArray(customProfile.notableRecipients)) {
    return notableRecipientCards(customProfile.notableRecipients);
  }

  return formatProfileValue(criteriaFieldValue(field, item, category, selectedRecognition));
}

function notableRecipientCards(recipients) {
  return `
    <div class="notable-recipient-grid">
      ${recipients
        .map(
          (recipient) => `
          <article class="notable-recipient-card">
            <img src="${escapeHtml(recipient.image)}" alt="${escapeHtml(recipient.name)}" loading="lazy" />
            <div>
              <strong>${escapeHtml(recipient.name)}</strong>
              <span>${escapeHtml(recipient.prize)}</span>
            </div>
          </article>
        `
        )
        .join("")}
    </div>
  `;
}

function criteriaFieldValue(field, item, category, selectedRecognition) {
  const customProfile = recognitionProfileFor(item, selectedRecognition);

  if (customProfile[field]) {
    return customProfile[field];
  }

  const facultyMatches = facultyRecordsForRecognition(item, selectedRecognition);
  if (facultyMatches.length) {
    const facultyHolders = facultyMatches
      .map((record) => `${record.faculty}${record.details ? ` (${record.details})` : ""}`)
      .join("; ");
    const facultyCategories = [...new Set(facultyMatches.map((record) => record.publicCategory))].join("; ");
    const facultyLevels = [...new Set(facultyMatches.map((record) => record.internalLevel))].join("; ");
    const facultyKnownValues = {
      "Notable Past Recipients": `MBZUAI faculty holders listed in the Faculty tab: ${facultyHolders}.`,
      "Relationship to Other Awards": `Faculty-table classification: ${facultyLevels}.`,
      "Ranking/Prestige Signal": `${tierLabel(tierForRecognition(item, selectedRecognition, category))}. Faculty category: ${facultyCategories}.`
    };

    if (facultyKnownValues[field]) {
      return facultyKnownValues[field];
    }
  }

  const knownValues = {
    "Official Name": selectedRecognition,
    "Institution/Type": recognitionTypeLabel(selectedRecognition),
    Definition: category.definition,
    "Awarding Body": item.organization,
    "Type of Recognition": selectedRecognition,
    "Ranking/Prestige Signal": tierLabel(tierForRecognition(item, selectedRecognition, category))
  };

  if (field === "Organization Type" && item.note) {
    return item.note;
  }

  const completionPrompts = {
    "Organization Type": "Government, private, society, foundation, academy, or scholarly association",
    "Committee/Jury Composition": "Who makes the final decision; committee size; committee selection process",
    "Main Field/Scope": "C.S, A.I, M.L, medicine, engineering, sciences, or other relevant field",
    "Geographic Scope": "Global/international, regional, national, or institutional",
    "Geographic Distribution": "Preference for diversity, regional quotas, or no geographic distribution rule",
    "Nomination Process": "Election by members, nomination plus review, open application, or appointment",
    "Nomination Deadline": "Application window, multiple rounds, or rolling cycle",
    "Application Requirements": "Required documents, recommendation letters, CV, publications, or nomination package",
    "Eligibility/Restrictions": "Career stage, age limit, citizenship, institutional affiliation, or prior achievements",
    Frequency: "How often awarded and number per cycle",
    Duration: "One-time, lifetime, short-term, or long-term recognition",
    "Prize Money/Material Award": "Amount, currency, and conditions",
    "Number of Recipients": "Total awarded per cycle, success rate, or total recipients all-time",
    "Notable Past Recipients": "Famous winners and other major achievements of recipients",
    "Career Impact/Outcomes": "Career advancement, publication/citation boost, or other outcome evidence",
    "Relationship to Other Awards": "Prerequisite for other honors or often awarded together",
    "Ranking/Prestige Signal": "Field, national, or international recognition level; citation impact; hybrid level"
  };

  return knownValues[field] || completionPrompts[field] || "To be completed";
}

function recognitionProfileFor(item, selectedRecognition) {
  const profiles = item.criteriaProfiles || {};

  if (profiles[selectedRecognition]) {
    return profiles[selectedRecognition];
  }

  const selected = normalizeText(selectedRecognition);
  const matchingKey = Object.keys(profiles).find((key) => normalizeText(key) === selected);

  return matchingKey ? profiles[matchingKey] : {};
}

function facultyRecognitionTitle(record) {
  const match = facultyRecognitionTarget(record);
  const organization = record.organization || match?.organization || "";
  const distinction = record.distinction;

  if (!organization || recognitionIncludesOrganization(distinction, organization)) {
    return distinction;
  }

  return `${organization} - ${distinction}`;
}

function recognitionIncludesOrganization(recognition, organization) {
  const recognitionText = normalizeText(recognition);
  const organizationBase = normalizeText(organization.replace(/\([^)]*\)/g, ""));
  const organizationAliases = [
    organizationBase,
    ...organization
      .split(/\s+/)
      .filter((part) => /^[A-Z]{2,}$/.test(part.replace(/[^A-Z]/g, "")))
      .map((part) => part.replace(/[^A-Z]/g, "")),
    ...[...organization.matchAll(/\(([^)]+)\)/g)].map((match) => match[1])
  ]
    .map(normalizeText)
    .filter(Boolean);

  return organizationAliases.some((alias) => recognitionText.startsWith(alias));
}

function sortFacultyRecords(records) {
  return [...records].sort((a, b) => {
    const facultySort = normalizeText(a.faculty).localeCompare(normalizeText(b.faculty));
    if (facultySort !== 0) return facultySort;

    return normalizeText(facultyRecognitionTitle(a)).localeCompare(normalizeText(facultyRecognitionTitle(b)));
  });
}

function groupFacultyRecords(records) {
  const groups = new Map();

  sortFacultyRecords(records).forEach((record) => {
    const key = normalizeText(record.faculty);
    if (!groups.has(key)) {
      groups.set(key, { faculty: record.faculty, records: [] });
    }
    groups.get(key).records.push(record);
  });

  return [...groups.values()];
}

function organizationsMatch(targetOrganization, candidateOrganization) {
  if (!targetOrganization) return true;
  return (
    targetOrganization === candidateOrganization ||
    targetOrganization.includes(candidateOrganization) ||
    candidateOrganization.includes(targetOrganization)
  );
}

function facultyRecognitionTarget(record, recognitions = allRecognitions()) {
  const targetRecognition = normalizeText(record.routeRecognition || record.distinction);
  const targetOrganization = normalizeText(record.organization || "");

  const organizationMatches = (match) =>
    organizationsMatch(targetOrganization, normalizeText(match.organization));
  const recognitionMatches = (match) => normalizeText(match.recognition) === targetRecognition;

  return (
    recognitions.find((match) => recognitionMatches(match) && organizationMatches(match)) ||
    recognitions.find((match) => !targetOrganization && recognitionMatches(match)) ||
    recognitions.find((match) => {
      const matchRecognition = normalizeText(match.recognition);
      return (
        organizationMatches(match) &&
        (matchRecognition.includes(targetRecognition) || targetRecognition.includes(matchRecognition))
      );
    })
  );
}

function facultyRecognitionHref(record, recognitions = allRecognitions()) {
  const match = facultyRecognitionTarget(record, recognitions);
  return match ? `#criteria/${match.categoryId}/${match.itemIndex}/${match.recognitionIndex}` : "#directory";
}

function facultyRecordsForRecognition(item, selectedRecognition) {
  const recognition = normalizeText(selectedRecognition);
  const organization = normalizeText(item.organization);

  return facultyRecognitions.filter((record) => {
    const recordRecognition = normalizeText(record.routeRecognition || record.distinction);
    const recordOrganization = normalizeText(record.organization || "");

    return recordRecognition === recognition && organizationsMatch(recordOrganization, organization);
  });
}

function renderFacultyPage() {
  const sortedRecords = sortFacultyRecords(facultyRecognitions);
  const facultyCount = groupFacultyRecords(sortedRecords).length;

  app.innerHTML = `
    <section class="band compact">
      <div class="section-inner">
        <div class="section-heading">
          <div>
            <h2>Faculty</h2>
            <p>${facultyCount} faculty members and ${facultyRecognitions.length} faculty-held recognitions, mapped to the hybrid public category and internal level framework.</p>
          </div>
        </div>

        <div class="toolbar">
          <label class="search" for="faculty-search">
            ${icon("search")}
            <input id="faculty-search" type="search" placeholder="Search faculty or recognitions" autocomplete="off" />
          </label>
        </div>

        <div id="faculty-results">
          ${facultyTable(sortedRecords)}
        </div>
      </div>
    </section>
  `;

  const search = document.querySelector("#faculty-search");
  search.addEventListener("input", () => {
    const query = normalizeText(search.value.trim());
    const filtered = facultyRecognitions.filter((record) =>
      normalizeText([record.faculty, record.distinction, record.organization, record.details, record.work, record.publicCategory, record.internalLevel].join(" "))
        .includes(query)
    );
    document.querySelector("#faculty-results").innerHTML = facultyTable(sortFacultyRecords(query ? filtered : facultyRecognitions));
  });
}

function facultyTable(records) {
  if (!records.length) {
    return `
      <div class="empty-state">
        <div>
          <strong>No matching faculty recognitions</strong>
          <span>Try searching by faculty name, recognition, or level.</span>
        </div>
      </div>
    `;
  }

  const recognitions = allRecognitions();
  const groups = groupFacultyRecords(records);

  return `
    <table class="directory-table faculty-table">
      <thead>
        <tr>
          <th>Faculty</th>
          <th>Recognitions</th>
          <th>Levels</th>
        </tr>
      </thead>
      <tbody>
        ${groups
          .map((group) => {
            const levelKeys = [...new Set(group.records.map((record) => record.levelKey).filter(Boolean))];
            return `
              <tr>
                <td>${escapeHtml(group.faculty)}<span class="table-subtext">${group.records.length} recognition${group.records.length === 1 ? "" : "s"}</span></td>
                <td>
                  <ul class="faculty-recognition-list">
                    ${group.records
                      .map((record) => {
                        const match = facultyRecognitionTarget(record, recognitions);
                        const href = match ? `#criteria/${match.categoryId}/${match.itemIndex}/${match.recognitionIndex}` : "#directory";
                        const title = facultyRecognitionTitle(record);
                        return `
                          <li>
                            <a href="${href}">${escapeHtml(title)}</a>
                            ${record.details ? `<span class="table-subtext">${escapeHtml(record.details)}</span>` : ""}
                            ${record.work ? `<span class="table-work-note"><strong>Related work:</strong> ${escapeHtml(record.work)}</span>` : ""}
                          </li>
                        `;
                      })
                      .join("")}
                  </ul>
                </td>
                <td>
                  <div class="tag-cluster">${levelKeys.map((key) => tierBadge(key)).join("")}</div>
                </td>
              </tr>
            `;
          })
          .join("")}
      </tbody>
    </table>
  `;
}

function renderDirectoryPage() {
  const recognitions = allRecognitions();

  app.innerHTML = `
    <section class="band compact">
      <div class="section-inner">
        <div class="section-heading">
          <div>
            <h2>Recognitions</h2>
            <p>A combined view of the academies, fellowships, awards, funding bodies, and leadership roles across all institutions.</p>
          </div>
          <button class="button light" type="button" data-export="all">${icon("download")}Export all</button>
        </div>

        <div class="toolbar">
          <label class="search" for="directory-search">
            ${icon("search")}
            <input id="directory-search" type="search" placeholder="Search recognitions" autocomplete="off" />
          </label>
        </div>

        <div id="directory-results">
          ${directoryTable(recognitions)}
        </div>
      </div>
    </section>
  `;

  const search = document.querySelector("#directory-search");
  search.addEventListener("input", () => {
    const query = search.value.trim().toLowerCase();
    const filtered = allRecognitions().filter((item) =>
      [item.category, item.organization, item.recognition, item.note]
        .join(" ")
        .toLowerCase()
        .includes(query)
    );
    document.querySelector("#directory-results").innerHTML = directoryTable(filtered);
  });
}

function directoryTable(items) {
  if (!items.length) {
    return `
      <div class="empty-state">
        <div>
          <strong>No matching recognitions</strong>
          <span>Try a broader search term.</span>
        </div>
      </div>
    `;
  }

  return `
    <table class="directory-table">
      <thead>
        <tr>
          <th>Organization</th>
          <th>Recognition</th>
          <th>Level</th>
          <th>Institution</th>
          <th>Note</th>
        </tr>
      </thead>
      <tbody>
        ${items
          .map(
            (item) => `
            <tr>
              <td><a class="table-logo-link" href="#recognition/${item.categoryId}/${item.itemIndex}">${institutionLogo(item, "tiny")}${escapeHtml(item.organization)}</a></td>
              <td><a href="#criteria/${item.categoryId}/${item.itemIndex}/${item.recognitionIndex}">${escapeHtml(item.recognition)}</a></td>
              <td>${tierBadge(item.tierKey)}</td>
              <td>${escapeHtml(item.category)}</td>
              <td>${escapeHtml(item.note || "")}</td>
            </tr>
          `
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function handleClick(event) {
  const exportButton = event.target.closest("[data-export]");
  if (exportButton) {
    exportData(exportButton.dataset.export);
  }
}

function exportData(scope) {
  const selectedCategories = scope === "all" ? categories : categories.filter((category) => category.id === scope);
  const payload = {
    exportedAt: new Date().toISOString(),
    scope,
    categories: selectedCategories,
    recognitions: selectedCategories.flatMap((category) =>
      (category.items || []).flatMap((item, itemIndex) =>
        recognitionOptions(item).map((recognition, recognitionIndex) => ({
          organization: item.organization,
          recognition,
          note: item.note,
          website: item.website,
          logoUrl: item.logoUrl,
          logoFit: item.logoFit,
          logoDomains: item.logoDomains,
          tierKey: tierForRecognition(item, recognition, category),
          tier: tierLabel(tierForRecognition(item, recognition, category)),
          itemIndex,
          recognitionIndex,
          categoryId: category.id,
          category: category.title
        }))
      )
    )
  };

  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = scope === "all" ? "academic-distinctions-directory.json" : `${scope}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  toast("Export prepared.");
}

function toast(message) {
  document.querySelector(".toast")?.remove();
  const element = document.createElement("div");
  element.className = "toast";
  element.textContent = message;
  document.body.appendChild(element);
  setTimeout(() => element.remove(), 2600);
}

window.addEventListener("hashchange", render);
document.addEventListener("click", handleClick);

render();
