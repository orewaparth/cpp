
function predictColleges() {
    const jeeRank = parseInt(document.getElementById("jeeRank").value);
    const caste = document.getElementById("caste").value;
    let prediction = "";

    // Predict colleges based on JEE Rank and Caste (modelse ify as needed)
    if (jeeRank < 200 && caste == "General") {
        prediction = "NIT TIRUCHIRAPPALLI : COMPUTER SCIENCE";
    } else if (jeeRank >= 200 && jeeRank < 500 && caste == "General") {
        prediction =   "NIT TIRUCHIRAPPALLIER : COMPUTER SCIENCE" ;
    } else if (jeeRank >= 500 && jeeRank < 1000 && caste == "General") {
        prediction = "NIT TIRUCHIRAPPALLI : COMPUTER SCIENCE<br>" +
                     "NIT SURATKAL : COMPUTER SCIENCE<br>" +
                     "NIT WARANGAL : COMPUTER SCIENCE<br>" +
                     "NIT ROURKELA : COMPUTER SCIENCE" ;
                     
    } // Add more conditions for other rank ranges
    else if (jeeRank >= 1000 && jeeRank < 1500 && caste == "General") {
        prediction = "NIT WARANGAL : COMPUTER SCIENCE<br>"+
                     "NIT SURATKAL : COMPUTER SCIENCE<br>" +
                     "NIT ALLAHBAD : COMPUTER SCIENCE<br>" +
                     "NIT ROURKELA : COMPUTER SCIENCE";
    } else if (jeeRank >= 1500 && jeeRank < 3000 && caste == "General") {
        prediction = "NIT ROURKELA : COMPUTER SCIENCE<br>" +
            "NIT ALLAHABAD : COMPUTER SCIENCE<br>" +
            "NIT NAGPUR : COMPUTER SCIENCE<br>" +
            "NIT JAIPUR : COMPUTER SCIENCE<br>" +
            "NIT KURUKSHETRA : COMPUTER SCIENCE<br>" +
            "NIT ALLAHBAD : ELECTRICAL AND ELECTRONICS <br>" +
            "NIT CALICUT : COMPUTER SCIENCE";
    } else if (jeeRank >= 3000 && jeeRank < 5000 && caste == "General") {
        prediction = "NIT CALICUT : COMPUTER SCIENCE<br>" +
            "NIT NAGPUR : COMPUTER SCIENCE<br>" +
            "NIT JAIPUR : COMPUTER SCIENCE<br>" +
            "NIT SURAT : COMPUTER SCIENCE<br>" +
            "NIT KURUKSHETRA : COMPUTER SCIENCE<br>" +
            "NIT BHOPAL : COMPUTER SCIENCE<br>" +
            "NIT ALLAHBAD : ELECTRICAL AND ELECTRONICS <br>" +
            "NIT TIRUCHIRAPALLI : ELECTRONICS AND COMMUNICATION<br>" +
            "NIT SURATKHAL : ELECTRONICS AND COMMUNICATION";
    } else if (jeeRank >= 5000 && jeeRank < 10000 && caste == "General") {
        prediction = "NIT SURAT : COMPUTER SCIENCE<br>" +
            "NIT DURGAPUR : COMPUTER SCIENCE<br>" +
            "NIT BHOPAL : COMPUTER SCIENCE<br>" +
            "NIT SILCHAR : COMPUTER SCIENCE<br>" +
            "NIT ANDHRA : COMPUTER SCIENCE<br>" +
            "NIT HAMIRPUR : COMPUTER SCIENCE<br>" +
            "NIT PATNA : COMPUTER SCIENCE<br>" +
            "NIT GOA : COMPUTER SCIENCE<br>" +
            "NIT JAMSHEDPUR : COMPUTER SCIENCE<br>" +
            "NIT JALANDHAR : COMPUTER SCIENCE<br>" +
            "NIT ALLAHBAD : ELECTRICAL AND ELECTRONICS <br>" +
            "NIT ROURKELA : ELECTRICAL AND ELECTRONICS <br>" +
            "NIT JAIPUR : ELECTRICAL AND ELECTRONICS <br>" +
            "NIT TIRUCHIRAPALLI : ELECTRICAL AND ELECTRONICS<br>" +
            "NIT SURATKHAL : ELECTRICAL AND ELECTRONICS<br>" +
            "NIT WARANGAL : ELECTRICAL AND ELECTRONICS<br>" +
            "NIT DELHI : COMPUTER SCIENCE<br>" +
            "NIT WARANGAL : ELECTRONICS AND COMMUNICATION<br>" +
            "NIT CALICUT : ELECTRONICS AND COMMUNICATION<br>" +
            "NIT ROURKELA : ELECTRONICS AND COMMUNICATION<br>" +
            "NIT ALLAHBAD : ELECTRONICS AND COMMUNICATION<br>" +
            "NIT NAGPUR : ELECTRONICS AND COMMUNICATION<br>" +
            "NIT TIRUCHIRAPALI : MECHANICAL ENGINEERING<br>" +
            "NIT SURATHKAL : MECHANICAL ENGINEERING<br>" +
            "NIT KURUKHESTRA : INFORMATION TECHNOLOGY";

    }
    else if (jeeRank >= 10000 && jeeRank < 15000 && caste == "General") {
        prediction = "NIT PATNA : COMPUTER SCIENCE <br>" +
            "NIT GOA : COMPUTER SCIENCE <br>" +
            "NIT ANDHRA : COMPUTER SCIENCE <br>" +
            "NIT SILCHAR : COMPUTER SCIENCE <br>" +
            "NIT AGARTALA : COMPUTER SCIENCE<br>" +
            "NIT PUDUCHERRY : COMPUTER SCIENCE<br>" +
            "NIT UTTRAKHAND : COMPUTER SCIENCE<br>" +
            "NIT MEGHALAYA : COMPUTER SCIENCE<br>" +
            "NIT CALICUT : ELECRICAL AND ELECTRONICS <br>" +
            "NIT NAGPUR : ELECRICAL AND ELECTRONICS <br>" +
            "NIT ALLAHBAD : ELECRICAL ENGINEERING <br>" +
            "NIT KURUKSHETRA : ELECRICAL ENGINEERING <br>" +
            "NIT JAIPUR : ELECTRICAL AND ELECTRONICS <br>" +
            "NIT DURGAPUR : ELECTRONICS AND COMMUNICATION <br>" +
            "NIT JAIPUR : ELECTRONICS AND COMMUNICATION <br>" +
            "NIT BHOPAL : ELECTRONICS AND COMMUNICATION <br>" +
            "NIT DELHI : ELECTRONICS AND COMMUNICATION <br>" +
            "NIT DURGAPUR : ELECTRONICS AND COMMUNICATION <br>" +
            "NIT JAIPUR : ELECTRONICS AND COMMUNICATION <br>" +
            "NIT BHOPAL : ELECTRONICS AND COMMUNICATION <br>" +
            "NIT ALLAHBAD : ELECTRONICS AND COMMUNICATION <br>" +
            "NIT KURUKHESTRA : ELECTRONICS AND COMMUNICATION <br>" +
            "NIT JAMSHEDPUR : ELECTRONICS AND COMMUNICATION <br>" +
            "NIT SURATHKAL : MECHANICAL ENGINEERING <br>" +
            "NIT WARANGAL : MECHANICAL ENGINEERING <br>" +
            "NIT TIRUCHIPALI : CIVIL ENGINEERING <br>" +
            "NIT JALANDHAR : INFORMATION TECHNOLOGY <br>" +
            "NIT RAIPUR : INFORMATION TECHNOLOGY ";
    }
    else if (jeeRank >= 15000 && jeeRank < 20000 && caste == "General") {
        prediction = "NIT SRINAGAR : COMPUTER SCIENCE <br>" +
            "NIT SHIBPUR : COMPUTER SCIENCE <br>" +
            "NIT PUDUCHERRY : COMPUTER SCIENCE <br>" +
            "NIT AGARTALA : COMPUTER SCIENCE<br>" +
            "NIT ARUNACHAL : COMPUTER SCIENCE<br>" +
            "NIT SIKKIM : COMPUTER SCIENCE<br>" +
            "NIT KURUKSHETRA : ELECRICAL AND ELECTRONICS <br>" +
            "NIT DURGAPUR : ELECRICAL AND ELECTRONICS <br>" +
            "NIT JAMSHEDPUR : ELECTRICAL AND ELECTRONICS <br>" +
            "NIT HAMIRPUR : ELECTRICAL AND ELECTRONICS <br>" +
            "NIT RAIPUR : ELECTRICAL AND ELECTRONICS <br>" +
            "NIT JALANDAR : ELECTRICAL AND ELECTRONICS <br>" +
            "NIT SILICHAR : ELECTRICAL AND ELECTRONICS <br>" +
            "NIT AGARTALA : ELECTRICAL AND ELECTRONICS <br>" +
            "NIT BHOPAL : ELECRICAL ENGINEERING <br>" +
            "NIT KURUKHESTRA : ELECRICAL ENGINEERING <br>" +
            "NIT SURAT : ELECRICAL ENGINEERING <br>" +
            "NIT ALLAHBAD : ELECTRONICS AND COMMUNICATION <br>" +
            "NIT BHOPAL : ELECTRONICS AND COMMUNICATION <br>" +
            "NIT DELHI : ELECTRONICS AND COMMUNICATION <br>" +
            "NIT SURAT : ELECTRONICS AND COMMUNICATION <br>" +
            "NIT JAMSHEDPUR : ELECTRONICS AND COMMUNICATION <br>" +
            "NIT JALANDHAR : ELECTRONICS AND COMMUNICATION <br>" +
            "NIT RAIPUR : ELECTRONICS AND COMMUNICATION <br>" +
            "NIT HAMIRPUR : ELECTRONICS AND COMMUNICATION <br>" +
            "NIT SILICHAR : ELECTRONICS AND COMMUNICATION <br>" +
            "NIT PATNA : ELECTRONICS AND COMMUNICATION <br>" +
            "NIT WARANGAL : MECHANICAL ENGINEERING <br>" +
            "NIT ALLAHBAD : MECHANICAL ENGINEERING <br>" +
            "NIT ROURKELA : MECHANICAL ENGINEERING <br>" +
            "NIT TIRUCHIPALI : CIVIL ENGINEERING <br>" +
            "NIT SURATHKAL : CIVIL ENGINEERING <br>" +
            "NIT WARANGAL : CIVIL ENGINEERING <br>" +
            "NIT TIRUCHIRAPALI : CHEMICAL ENGINEERING <br>" +
            "NIT RAIPUR : INFORMATION TECHNOLOGY <br>" +
            "NIT SHIBPUR : INFORMATION TECHNOLOGY ";
    }
    else if (jeeRank >= 20000 && jeeRank < 30000 && caste == "General") {
        prediction = "NIT ANDHRA : COMPUTER SCIENCE <br>" +
            "NIT NAGALAND : COMPUTER SCIENCE<br>" +
            "NIT SRINAGAR : COMPUTER SCIENCE<br>" +
            "NIT ARUNACHAL : COMPUTER SCIENCE<br>" +
            "NIT SIKKIM : COMPUTER SCIENCE<br>" +
            "NIT MANIPUR : COMPUTER SCIENCE<br>" +
            "NIT MIZORAM : COMPUTER SCIENCE<br>" +
            "NIT UTTRAKHAND : COMPUTER SCIENCE <br>" +
            "NIT HAMIRPUR : ELECRICAL AND ELECTRONICS <br>" +
            "NIT RAIPUR : ELECRICAL ENGINEERING <br>" +
            "NIT BHOPAL : ELECRICAL ENGINEERING <br>" +
            "NIT JAMSHEDPUR : ELECRICAL ENGINEERING <br>" +
            "NIT SILCHAR : ELECRICAL ENGINEERING <br>" +
            "NIT RAIPUR : ELECTRONICS AND COMMUNICATION <br>" +
            "NIT SILICHAR : ELECTRONICS AND COMMUNICATION <br>" +
            "NIT PATNA : ELECTRONICS AND COMMUNICATION <br>" +
            "NIT GOA : ELECTRONICS AND COMMUNICATION <br>" +
            "NIT ROURKELA : MECHANICAL ENGINEERING <br>" +
            "NIT CALICUT : MECHANICAL ENGINEERING <br>" +
            "NIT ALLAHBAD : MECHANICAL ENGINEERING <br>" +
            "NIT TIRUCHIPALI : CIVIL ENGINEERING <br>" +
            "NIT SURATHKAL : CIVIL ENGINEERING <br>" +
            "NIT WARANGAL : CIVIL ENGINEERING <br>" +
            "NIT ROURKELA : CHEMICAL ENGINEERING <br>" +
            "NIT WARANGAL : CHEMICAL ENGINEERING ";
    }
    else if (jeeRank >= 30000 && jeeRank < 40000 && caste == "General") {
        prediction = "NIT AGARTALA : COMPUTER SCIENCE <br>" +
            "NIT MEGHALAYA : COMPUTER SCIENCE <br>" +
            "NIT DELHI : ELECRICAL AND ELECTRONICS <br>" +
            "NIT JAMSHEDPUR : ELECRICAL ENGINEERING <br>" +
            "NIT HAMIRPUR : ELECRICAL ENGINEERING <br>" +
            "NIT JALANDHAR : ELECRICAL ENGINEERING <br>" +
            "NIT PATNA : ELECTRONICS AND COMMUNICATION <br>" +
            "NIT PUDUCHERRY : ELECTRONICS AND COMMUNICATION <br>" +
            "NIT JAIPUR : MECHANICAL ENGINEERING <br>" +
            "NIT NAGPUR : MECHANICAL ENGINEERING <br>" +
            "NIT DURGAPUR : MECHANICAL ENGINEERING <br>" +
            "NIT WARANGAL : CIVIL ENGINEERING <br>" +
            "NIT JAIPUR : CIVIL ENGINEERING <br>" +
            "NIT ROURKELA : CIVIL ENGINEERING <br>" +
            "NIT ROURKELA : CHEMICAL ENGINEERING <br>" +
            "NIT WARANGAL : CHEMICAL ENGINEERING <br>" +
            "NIT SURATHKAL : CHEMICAL ENGINEERING <br>" +
            "NIT ALLAHBAD : CHEMICAL ENGINEERING <br>" +
            "NIT TIRUCHIRAPALI : METALLURGY AND MATERIAL <br>" +
            "NIT TIRUCHIRAPALI : PRODUCTION ENGINEERING ";
    }
    else if (jeeRank >= 40000 && jeeRank < 60000 && caste == "General") {
        prediction = "NIT SRINAGAR : COMPUTER SCIENCE <br>" +
            "NIT SIKKIM : COMPUTER SCIENCE <br>" +
            "NIT GOA : ELECRICAL AND ELECTRONICS <br>" +
            "NIT PUDUCHERRY : ELECRICAL AND ELECTRONICS <br>" +
            "NIT UTTRAKHAND : ELECRICAL AND ELECTRONICS <br>" +
            "NIT ANDHRA PRADESH : ELECRICAL AND ELECTRONICS <br>" +
            "NIT RAIPUR : ELECRICAL ENGINEERING <br>" +
            "NIT SHIBPUR : ELECRICAL ENGINEERING <br>" +
            "NIT SILICHAR : ELECRICAL ENGINEERING <br>" +
            "NIT PATNA : ELECRICAL ENGINEERING <br>" +
            "NIT MIZORAM : ELECTRONICS AND COMMUNICATION <br>" +
            "NIT ARUNACHAL PRADESH : ELECTRONICS AND COMMUNICATION <br>" +
            "NIT NAGALAND : ELECTRONICS AND COMMUNICATION <br>" +
            "NIT AGARTALA : ELECTRONICS AND COMMUNICATION <br>" +
            "NIT MEGHALAYA : ELECTRONICS AND COMMUNICATION <br>" +
            "NIT UTTARAKHAND : ELECTRONICS AND COMMUNICATION <br>" +
            "NIT ANDRA PRADESH : ELECTRONICS AND COMMUNICATION <br>" +
            "NIT DURGAPUR : MECHANICAL ENGINEERING <br>" +
            "NIT KURUKHESTRA : MECHANICAL ENGINEERING <br>" +
            "NIT SURAT : MECHANICAL ENGINEERING <br>" +
            "NIT SURATHKAL : MECHANICAL ENGINEERING <br>" +
            "NIT JAMSHEDPUR : MECHANICAL ENGINEERING <br>" +
            "NIT DURGAPUR : MECHANICAL ENGINEERING <br>" +
            "NIT BHOPAL : MECHANICAL ENGINEERING <br>" +
            "NIT HAMIRPUR : MECHANICAL ENGINEERING <br>" +
            "NIT SHIBPUR : MECHANICAL ENGINEERING <br>" +
            "NIT JALANDHAR : MECHANICAL ENGINEERING <br>" +
            "NIT JAIPUR : CIVIL ENGINEERING <br>" +
            "NIT ALLAHBAD : CIVIL ENGINEERING <br>" +
            "NIT CALICUT : CIVIL ENGINEERING <br>" +
            "NIT NAGPUR : CIVIL ENGINEERING <br>" +
            "NIT CALICUT : CHEMICAL ENGINEERING <br>" +
            "NIT JAIPUR : CHEMICAL ENGINEERING <br>" +
            "NIT NAGPUR : CHEMICAL ENGINEERING <br>" +
            "NIT SURAT : CHEMICAL ENGINEERING <br>" +
            "NIT WARANGAL : BIO TECHNOLOGY <br>" +
            "NIT SURATHKAL : MINING ENGINEERING <br>" +
            "NIT TIRUCHIRAPALI : METALLURGY AND MATERIAL <br>" +
            "NIT SURATHKAL : METALLURGY AND MATERIAL <br>" +
            "NIT WARANGAL : METALLURGY AND MATERIAL <br>" +
            "NIT TIRUCHIRAPALI : PRODUCTION ENGINEERING <br>" +
            "NIT SRINAGAR : INFORMATION TECHNOLOGY <br>" +
            "NIT SIKKIM : ELECRICAL AND ELECTRONICS <br>" +
            "NIT NAGALAND : ELECRICAL AND ELECTRONICS <br>" +
            "NIT MIZORAM : ELECRICAL AND ELECTRONICS <br>" +
            "NIT ARUNACHAL PRADESH : ELECRICAL ENGINEERING <br>" +
            "NIT SRINAGAR : ELECRICAL ENGINEERING <br>" +
            "NIT MANIPUR : ELECRICAL ENGINEERING <br>" +
            "NIT ROURKELA : INDUSTRIAL DESIGN ";
    }
    else if (jeeRank >= 60000 && jeeRank < 70000 && caste == "General") {
        prediction = "NIT PUDUCHERRY : ELECRICAL AND ELECTRONICS <br>" +
            "NIT ANDHRA PRADESH : ELECRICAL AND ELECTRONICS <br>" +
            "NIT AGARTALA : ELECRICAL ENGINEERING <br>" +
            "NIT SRINAGR : ELECTRONICS AND COMMUNICATION <br>" +
            "NIT SIKKIM : ELECTRONICS AND COMMUNICATION <br>" +
            "NIT BHOPAL : MECHANICAL ENGINEERING <br>" +
            "NIT HAMIRPUR : MECHANICAL ENGINEERING <br>" +
            "NIT SILCHAR : MECHANICAL ENGINEERING <br>" +
            "NIT GOA : MECHANICAL ENGINEERING <br>" +
            "NIT PATNA : MECHANICAL ENGINEERING <br>" +
            "NIT RAIPUR : MECHANICAL ENGINEERING <br>" +
            "NIT JALANDHAR : MECHANICAL ENGINEERING <br>" +
            "NIT SHIBPUR : MECHANICAL ENGINEERING <br>" +
            "NIT NAGPUR : CIVIL ENGINEERING <br>" +
            "NIT JAMSHEDPUR : CIVIL ENGINEERING <br>" +
            "NIT BHOPAL : CIVIL ENGINEERING <br>" +
            "NIT SURAT : CIVIL ENGINEERING <br>" +
            "NIT DURGAPUR : CIVIL ENGINEERING <br>" +
            "NIT KURUKHESTRA : CIVIL ENGINEERING <br>" +
            "NIT NAGPUR : CHEMICAL ENGINEERING <br>" +
            "NIT SURAT : CHEMICAL ENGINEERING <br>" +
            "NIT DURGAPUR : CHEMICAL ENGINEERING <br>" +
            "NIT BHOPAL : CHEMICAL ENGINEERING <br>" +
            "NIT WARANGAL : BIO TECHNOLOGY <br>" +
            "NIT ROURKELA : BIO TECHNOLOGY <br>" +
            "NIT SURATHKAL : MINING ENGINEERING <br>" +
            "NIT ROURKELA : METALLURGY AND MATERIAL <br>" +
            "NIT ROURKELA : INDUSTRIAL DESIGN ";
    }
    else if (jeeRank >= 70000 && jeeRank < 80000 && caste == "General") {
        prediction = "NIT BHOPAL : CIVIL ENGINEERING <br>" +
            "NIT ANDRA PRADESH : MECHANICAL ENGINEERING <br>" +
            "NIT AGARTALA : MECHANICAL ENGINEERING <br>" +
            "NIT SIKKIM : MECHANICAL ENGINEERING <br>" +
            "NIT SRINAGAR : MECHANICAL ENGINEERING <br>" +
            "NIT ARUNACHAL PRADESH : MECHANICAL ENGINEERING <br>" +
            "NIT MANIPUR : MECHANICAL ENGINEERING <br>" +
            "NIT NAGALND : MECHANICAL ENGINEERING <br>" +
            "NIT UTTARAKHAND : CIVIL ENGINEERING <br>" +
            "NIT ROURKELA : CIVIL ENGINEERING <br>" +
            "NIT ANDHRA PRADESH : CIVIL ENGINEERING <br>" +
            "NIT PUDUCHERRY : CIVIL ENGINEERING <br>" +
            "NIT ALLAHBAD : CIVIL ENGINEERING <br>" +
            "NIT AGARTALA : CIVIL ENGINEERING <br>" +
            "NIT MEGHALAYA : CIVIL ENGINEERING <br>" +
            "NIT RAIPUR : CHEMICAL ENGINEERING <br>" +
            "NIT HAMIRPUR : MECHANICAL ENGINEERING <br>" +
            "NIT SILCHAR : MECHANICAL ENGINEERING <br>" +
            "NIT PATNA : MECHANICAL ENGINEERING <br>" +
            "NIT RAIPUR : MECHANICAL ENGINEERING <br>" +
            "NIT SURAT : CIVIL ENGINEERING <br>" +
            "NIT DURGAPUR : CIVIL ENGINEERING <br>" +
            "NIT KURUKHESTRA : CIVIL ENGINEERING <br>" +
            "NIT JALANDHAR : CIVIL ENGINEERING <br>" +
            "NIT RAIPUR : CIVIL ENGINEERING <br>" +
            "NIT GOA : CIVIL ENGINEERING <br>" +
            "NIT DURGAPUR : CHEMICAL ENGINEERING <br>" +
            "NIT BHOPAL : CHEMICAL ENGINEERING <br>" +
            "NIT ROURKELA : BIO TECHNOLOGY <br>" +
            "NIT ROURKELA : MINING ENGINEERING <br>" +
            "NIT ROURKELA : METALLURGY AND MATERIAL <br>" +
            "NIT JAIPUR : METALLURGY AND MATERIAL <br>" +
            "NIT CALICUT : PRODUCTION ENGINEERING <br>" +
            "NIT ROURKELA : INDUSTRIAL DESIGN ";
    }
    else if (jeeRank >= 80000 && jeeRank < 90000 && caste == "General") {
        prediction = "NIT PUDUCHERRY : MECHANICAL ENGINEERING <br>" +
            "NIT MEGHALAYA : MECHANICAL ENGINEERING <br>" +
            "NIT UTTARAKHAND : MECHANICAL ENGINEERING <br>" +
            "NIT MEGHALAYA : MECHANICAL ENGINEERING <br>" +
            "NIT RAIPUR : CIVIL ENGINEERING <br>" +
            "NIT GOA : CIVIL ENGINEERING <br>" +
            "NIT HAMIRPUR : CIVIL ENGINEERING <br>" +
            "NIT SILCHAR : CIVIL ENGINEERING <br>" +
            "NIT SHIBPUR : CIVIL ENGINEERING <br>" +
            "NIT JALANDHAR : CHEMICAL ENGINEERING <br>" +
            "NIT ROURKELA : MINING ENGINEERING <br>" +
            "NIT JAIPUR : METALLURGY AND MATERIAL <br>" +
            "NIT CALICUT : PRODUCTION ENGINEERING <br>" +
            "NIT ROURKELA : INDUSTRIAL DESIGN ";
    }
    else if (jeeRank >= 90000 && jeeRank < 100000 && caste == "General") {
        prediction = 
            "NIT HAMIRPUR : CHEMICAL ENGINEERING <br>" +
            "NIT ANDHRA PRADESH : CHEMICAL ENGINEERING <br>" +
            "NIT ROURKELA : CERAMIC ENGINEERING <br>" +
            "NIT ALLAHBAD : BIO TECHNOLOGY <br>" +
            "NIT CALICUT : BIO TECHNOLOGY <br>" +
            "NIT JALANDHAR : BIO TECHNOLOGY <br>" +
            "NIT DURGAPUR : BIO TECHNOLOGY <br>" +
            "NIT RAIPUR : BIO TECHNOLOGY <br>" +
            "NIT ANDHRA PRADESH : BIO TECHNOLOGY <br>" +
            "NIT NAGPUR : MINING ENGINEERING <br>" +
            "NIT SHIBPUR : MINING ENGINEERING <br>" +
            "NIT NAGPUR : METALLURGY AND MATERIAL <br>" +
            "NIT DURGAPUR : METALLURGY AND MATERIAL <br>" +
            "NIT JAMSHEDPUR : METALLURGY AND MATERIAL <br>" +
            "NIT RAIPUR : METALLURGY AND MATERIAL ";
    }
    else if (jeeRank >= 100000 && jeeRank < 150000 && caste == "General") {
        prediction = "NIT MIZORAM : MECHANICAL ENGINEERING <br>" +
            "NIT SIKKIM : CIVIL ENGINEERING <br>" +
            "NIT SRINAGAR : CIVIL ENGINEERING <br>" +
            "NIT ARUNACHAL PRADESH : CIVIL ENGINEERING <br>" +
            "NIT NAGALAND : CIVIL ENGINEERING <br>" +
            "NIT MANIPUR : CIVIL ENGINEERING <br>" +
            "NIT MIZORAM : CIVIL ENGINEERING <br>" +
            "NIT AGARTALA : CHEMICAL ENGINEERING <br>" +
            "NIT SRINAGAR : CHEMICAL ENGINEERING <br>" +
            "NIT RAIPUR : BIO TECHNOLOGY <br>" +
            "NIT ANDHRA PRADESH : BIO TECHNOLOGY <br>" +
            "NIT SHIBPUR : MINING ENGINEERING <br>" +
            "NIT RAIPUR : MINING ENGINEERING <br>" +
            "NIT ANDHRA PRADESH : METALLURGY AND MATERIAL <br>" +
            "NIT SRINAGAR : METALLURGY AND MATERIAL <br>" +
            "NIT AGARTALA : PRODUCTION ENGINEERING ";
    }
    
    else if (jeeRank < 100 && caste == "OBC") {
        prediction = "NIT TIRUCHIRAPPALI : COUMPUTER SCIENCE";
    }
    else if (jeeRank >= 100 && jeeRank < 200 && caste == "OBC") {
        prediction = "NIT TIRUCHIRAPPALI : COUMPUTER SCIENCE<br>" +
            "NIT SURATHKAL : COUMPUTER SCIENCE";
    }
    else if (jeeRank >= 200 && jeeRank < 400 && caste == "OBC") {
        prediction = "NIT SURATHKAL : COUMPUTER SCIENCE<br>" +
            "NIT WARANGAL : COUMPUTER SCIENCE";
    }
    else if (jeeRank >= 400 && jeeRank < 600 && caste == "OBC") {
        prediction = "NIT WARANGLE : COUMPUTER SCIENCE<br>" +
            "NIT ROURKELA : COUMPUTER SCIENCE<br>" +
            "NIT ALLAHABAD : COUMPUTER SCIENCE<br>" +
            "NIT CALICUT : COUMPUTER SCIENCE<br>" +
            "NIT SURATKAL : I.T";
    }

    else if (jeeRank >= 500 && jeeRank < 1000 && caste == "OBC") {
        prediction = "NIT ROURKELA : COUMPUTER SCIENCE<br>" +
            "NIT ALLAHABAD : COUMPUTER SCIENCE<br>" +
            "NIT CALICUT : COUMPUTER SCIENCE<br>" +
            "NIT JAIPUR : COUMPUTER SCIENCE<br>" +
            "NIT NAGPUR : COUMPUTER SCIENCE<br>" +
            "NIT TIRUCHIRAPPALI : ELECTRONICS AND COMMUNICATION<br>" +
            "NIT WARANGAL : ELECTRONICS AND COMMUNICATION<br>" +
            "NIT SURATKAL : ELECTRONICS AND COMMUNICATION";
    }
    else if (jeeRank >= 1000 && jeeRank < 2000 && caste == "OBC") {
        prediction = "NIT JAIPUR : COUMPUTER SCIENCE<br>" +
            "NIT NAGPUR : COUMPUTER SCIENCE<br>" +
            "NIT SURAT : COUMPUTER SCIENCE<br>" +
            "NIT DURGAPUR : COUMPUTER SCIENCE<br>" +
            "NIT BHOPAL : COUMPUTER SCIENCE<br>" +
            "NIT KURUKSHETRA : COUMPUTER SCIENCE<br>" +
            "NIT DELHI : COUMPUTER SCIENCE<br>" +
            "NIT SURATKAL : ELECTRONICS AND COMMUNICATION<br>" +
            "NIT ROURKELA : ELECTRONICS AND COMMUNICATION<br>" +
            "NIT CALICUT : ELECTRONICS AND COMMUNICATION<br>" +
            "NIT ALLAHBAD : ELECTRONICS AND COMMUNICATION<br>" +
            "NIT ALLAHBAD : I.T.<br>" +
            "NIT TIRUCHIRAPPALI :MECHANICAL";
    }
    else if (jeeRank >= 2000 && jeeRank < 3000 && caste == "OBC") {
        prediction = "NIT DURGAPUR : COUMPUTER SCIENCE<br>" +
            "NIT BHOPAL : COUMPUTER SCIENCE<br>" +
            "NIT KURUKSHETRA : COUMPUTER SCIENCE<br>" +
            "NIT DELHI : COUMPUTER SCIENCE<br>" +
            "NIT SILCHAR : COUMPUTER SCIENCE<br>" +
            "NIT JALANDHAR : COUMPUTER SCIENCE<br>" +
            "NIT JAMSHEDPUR : COUMPUTER SCIENCE<br>" +
            "NIT RAIPUR : COUMPUTER SCIENCE<br>" +
            "NIT HAMIRPUR : COUMPUTER SCIENCE<br>" +
            "NIT PUDUCHERRY : COUMPUTER SCIENCE<br>" +
            "NIT GOA : COUMPUTER SCIENCE<br>" +
            "NIT ROURKELA : ELECTRICAL AND ELECTRONICS<br>" +
            "NIT ALLAHBAD : ELECTRONICS AND COMMUNICATION<br>" +
            "NIT NAGPUR : ELECTRONICS AND COMMUNICATION<br>" +
            "NIT SURAT : ELECTRONICS AND COMMUNICATION<br>" +
            "NIT JAIPUR : ELECTRONICS AND COMMUNICATION<br>" +
            "NIT KURUKSHETRA : ELECTRONICS AND COMMUNICATION<br>" +
            "NIT KURUKHSHETRA : I.T.<br>" +
            "NIT JALANDAR : I.T.<br>" +
            "NIT SURATKAL :MECHANICAL<br>" +
            "NIT WARANGAL :MECHANICAL";



    }
    else if (jeeRank >= 3000 && jeeRank < 4000 && caste == "OBC") {
        prediction = "NIT SILCHAR : COUMPUTER SCIENCE<br>" +
            "NIT HAMIRPUR : COUMPUTER SCIENCE<br>" +
            "NIT PUDUCHERRY : COUMPUTER SCIENCE<br>" +
            "NIT GOA : COUMPUTER SCIENCE<br>" +
            "NIT PATNA : COUMPUTER SCIENCE<br>" +
            "NIT JAIPUR : ELECTRICAL AND ELECTRONICS<br>" +
            "NIT ALLAHBAD : ELECTRICAL AND ELECTRONICS<br>" +
            "NIT KURUKSHETRA : ELECTRICAL AND ELECTRONICS<br>" +
            "NIT SURAT : ELECTRICAL AND ELECTRONICS<br>" +
            "NIT KURUKSHETRA : ELECTRONICS AND COMMUNICATION<br>" +
            "NIT DURGAPUR : ELECTRONICS AND COMMUNICATION<br>" +
            "NIT SILCHAR : ELECTRONICS AND COMMUNICATION<br>" +
            "NIT RAIPUR : ELECTRONICS AND COMMUNICATION<br>" +
            "NIT JAMSHEDPUR : ELECTRONICS AND COMMUNICATION<br>" +
            "NIT HAMIRPUR : ELECTRONICS AND COMMUNICATION<br>" +
            "NIT JALANDAR : I.T.<br>" +
            "NIT RAIPUR : I.T.<br>" +
            "NIT HAMIRPUR :MATHS<br>" +
            "NIT ROURKELA :MECHANICAL<br>" +
            "NIT CALICUT :MECHANICAL<br>" +
            "NIT TIRUCHIRAPPALI :CHEMICAL<br>" +
            "NIT TIRUCHIRAPPALI :CIVIL";
    }
    else if (jeeRank >= 4000 && jeeRank < 5000 && caste == "OBC") {
        prediction = "NIT PUDUCHERRY : COUMPUTER SCIENCE<br>" +
            "NIT PATNA : COUMPUTER SCIENCE<br>" +
            "NIT UTTARAKHAND : COUMPUTER SCIENCE<br>" +
            "NIT MEGHALAYA : COUMPUTER SCIENCE<br>" +
            "NIT JAIPUR : ELECTRICAL AND ELECTRONICS<br>" +
            "NIT KURUKSHETRA : ELECTRICAL AND ELECTRONICS<br>" +
            "NIT SURAT : ELECTRICAL AND ELECTRONICS<br>" +
            "NIT BHOPAL : ELECTRICAL AND ELECTRONICS<br>" +
            "NIT DURGAPUR : ELECTRICAL AND ELECTRONICS<br>" +
            "NIT JAMSHEDPUR : ELECTRICAL AND ELECTRONICS<br>" +
            "NIT JALANDAR : ELECTRICAL AND ELECTRONICS<br>" +
            "NIT RAIPUR : ELECTRICAL AND ELECTRONICS<br>" +
            "NIT HAMIRPUR : ELECTRICAL AND ELECTRONICS<br>" +
            "NIT SILCHAR : ELECTRICAL AND ELECTRONICS<br>" +
            "NIT HAMIRPUR : ELECTRONICS AND COMMUNICATION<br>" +
            "NIT JAMSHEDPUR : ELECTRONICS AND COMMUNICATION<br>" +
            "NIT SILCHAR : ELECTRONICS AND COMMUNICATION<br>" +
            "NIT DELHI : ELECTRONICS AND COMMUNICATION<br>" +
            "NIT PUDUCHERRY : ELECTRONICS AND COMMUNICATION<br>" +
            "NIT JAIPUR :MECHANICAL<br>" +
            "NIT ALLAHBAD :MECHANICAL<br>" +
            "NIT NAGPUR :MECHANICAL<br>" +
            "NIT CALICUT :PHYSICS<br>" +
            "NIT SURATKAL :CHEMICAL<br>" +
            "NIT WARANGAL :CHEMICAL<br>" +
            "NIT SURATKAL :CIVIL";

    }
    else if (jeeRank >= 5000 && jeeRank < 7500 && caste == "OBC") {
        prediction = "NIT SIKKIM : COUMPUTER SCIENCE<br>" +
            "NIT MANIPUR : COUMPUTER SCIENCE<br>" +
            "NIT ARUNACHAL : COUMPUTER SCIENCE<br>" +
            "NIT JAMSHEDPUR : ELECTRICAL AND ELECTRONICS<br>" +
            "NIT JALANDAR : ELECTRICAL AND ELECTRONICS<br>" +
            "NIT RAIPUR : ELECTRICAL AND ELECTRONICS<br>" +
            "NIT HAMIRPUR : ELECTRICAL AND ELECTRONICS<br>" +
            "NIT SILCHAR : ELECTRICAL AND ELECTRONICS<br>" +
            "NIT PATNA : ELECTRICAL AND ELECTRONICS<br>" +
            "NIT ALLAHBAD : ELECTRICAL AND ELECTRONICS<br>" +
            "NIT PUDUCHERRY : ELECTRONICS AND COMMUNICATION<br>" +
            "NIT GOA : ELECTRONICS AND COMMUNICATION<br>" +
            "NIT ANDHRA : ELECTRONICS AND COMMUNICATION<br>" +
            "NIT ARARTALA : ELECTRONICS AND COMMUNICATION<br>" +
            "NIT JAIPUR :MECHANICAL<br>" +
            "NIT SURAT :MECHANICAL<br>" +
            "NIT KURUKSHETRA :MECHANICAL<br>" +
            "NIT BHOPAL :MECHANICAL<br>" +
            "NIT JALANDAR :MECHANICAL<br>" +
            "NIT TIRUCHIRAPPALI :METALLURGY<br>" +
            "NIT TIRUCHIRAPPALI :PRODUCTION<br>" +
            "NIT WARANGAL :CHEMICAL<br>" +
            "NIT ROURKELA :CHEMICAL<br>" +
            "NIT CALICUT :CHEMICAL<br>" +
            "NIT ALLAHBAD :CHEMICAL<br>" +
            "NIT JAIPUR :CHEMICAL<br>" +
            "NIT WARANGAL :CIVIL<br>" +
            "NIT ROURKELA :CIVIL<br>" +
            "NIT ALLAHBAD :CIVIL<br>" +
            "NIT NAGPUR :CIVIL<br>" +
            "NIT CALICUT :CIVIL";
    }
    else if (jeeRank >= 7500 && jeeRank < 10000 && caste == "OBC") {
        prediction = "NIT ALLAHBAD : ELECTRICAL AND ELECTRONICS<br>" +
            "NIT AGARTALA : ELECTRICAL AND ELECTRONICS<br>" +
            "NIT MANIPUR : ELECTRICAL AND ELECTRONICS<br>" +
            "NIT UTTRAKHAND : ELECTRONICS AND COMMUNICATION<br>" +
            "NIT MANIPUR : ELECTRONICS AND COMMUNICATION<br>" +
            "NIT SIKKIM : ELECTRONICS AND COMMUNICATION<br>" +
            "NIT AGARTALA : ELECTRONICS AND COMMUNICATION<br>" +
            "NIT SRINAGAR : ELECTRONICS AND COMMUNICATION<br>" +
            "NIT HAMIRPUR : ELECTRONICS AND COMMUNICATION<br>" +
            "NIT SRINAGAR : I.T.<br>" +
            "NIT ROURKELA :INDUSTRY<br>" +
            "NIT CALICUT :MATERIALS<br>" +
            "NIT BHOPAL :MECHANICAL<br>" +
            "NIT DURGAPUR :MECHANICAL<br>" +
            "NIT JAMSHEDPUR :MECHANICAL<br>" +
            "NIT JALANDAR :MECHANICAL<br>" +
            "NIT HAMIRPUR :MECHANICAL<br>" +
            "NIT RAIPUR :MECHANICAL<br>" +
            "NIT SILCHAR :MECHANICAL<br>" +
            "NIT PUDUCHERRY :MECHANICAL<br>" +
            "NIT PATNA :MECHANICAL<br>" +
            "NIT GOA :MECHANICAL<br>" +
            "NIT WRANGAL :METALLURGY<br>" +
            "NIT ROURKELA :METALLURGY<br>" +
            "NIT WRANGAL :METALLURGY<br>" +
            "NIT NAGPUR :METALLURGY<br>" +
            "NIT SURATKAL :MINING<br>" +
            "NIT ROURKELA :MINING<br>" +
            "NIT ALLAHBAD :PRODUCTION<br>" +
            "NIT CALICUT :PRODUCTION<br>" +
            "NIT WARANGAL :BIO TECH<br>" +
            "NIT ROURKELA :BIO TECH<br>" +
            "NIT JAIPUIR :CHEMICAL<br>" +
            "NIT NAGPUR :CHEMICAL<br>" +
            "NIT SURAT :CHEMICAL<br>" +
            "NIT DURGAPUR :CHEMICAL<br>" +
            "NIT BHOPAL :CHEMICAL<br>" +
            "NIT JAIPUR :CIVIL<br>" +
            "NIT KURUKSHETRA :CIVIL<br>" +
            "NIT SURAT :CIVIL<br>" +
            "NIT BHOPAL :CIVIL<br>" +
            "NIT DURGAPUR :CIVIL<br>" +
            "NIT GOA :CIVIL<br>" +
            "NIT JALANDAR :CIVIL<br>" +
            "NIT JAMSHEDPUR :CIVIL";
    }
    else if (jeeRank >= 10000 && jeeRank < 12500 && caste == "OBC") {
        prediction = "NIT MANIPUR : ELECTRICAL AND ELECTRONICS<br>" +
            "NIT ARUNACHAL : ELECTRICAL AND ELECTRONICS<br>" +
            "NIT SRINAGAR : ELECTRICAL AND ELECTRONICS<br>" +
            "NIT ROURKELA : FOOD<br>" +
            "NIT ANDHRA :MECHANICAL<br>" +
            "NIT AGARTALA :MECHANICAL<br>" +
            "NIT UTTRAKHAND :MECHANICAL<br>" +
            "NIT MEGHALAYA :MECHANICAL<br>" +
            "NIT SRINAGAR :MECHANICAL<br>" +
            "NIT ARUNACHAL :MECHANICAL<br>" +
            "NIT MANIPUR :MECHANICAL<br>" +
            "NIT NAGPUR :METALLURGY<br>" +
            "NIT JAIPUR :METALLURGY<br>" +
            "NIT ROURKELA :MINING<br>" +
            "NIT HAMIRPUR :PHYSICS<br>" +
            "NIT CALICUT :PRODUCTION<br>" +
            "NIT KURUKSHETRA :PRODUCTION<br>" +
            "NIT JAMSHEDPUR :PRODUCTION<br>" +
            "NIT ALLAHBAD :BIO TECH<br>" +
            "NIT CALICUT :BIO TECH<br>" +
            "NIT ROURKELA :CERAMIC<br>" +
            "NIT JALANDAR :CHEMICAL<br>" +
            "NIT HAMIRPUR :CHEMICAL<br>" +
            "NIT ANDHRA :CHEMICAL<br>" +
            "NIT RAIPUR :CHEMICAL<br>" +
            "NIT HAMIRPUR :CIVIL<br>" +
            "NIT JAMSHEDPUR :CIVIL<br>" +
            "NIT RAIPUR :CIVIL<br>" +
            "NIT SILCHAR :CIVIL<br>" +
            "NIT PATNA :CIVIL<br>" +
            "NIT UTTRAKHAND :CIVIL<br>" +
            "NIT PUDUCHERRY :CIVIL<br>" +
            "NIT MEGHALAYA :CIVIL";
    }
    else if (jeeRank >= 12500 && jeeRank < 15000 && caste == "OBC") {
        prediction = "NIT HAMIRPUR :MATERIALS<br>" +
            "NIT SIKKIM :MECHANICAL<br>" +
            "NIT MIZORAM :MECHANICAL<br>" +
            "NIT JAMSHEDPUR :METALLURGY<br>" +
            "NIT DURGAPUR :METALLURGY<br>" +
            "NIT RAIPUR :METALLURGY<br>" +
            "NIT BHOPAL :METALLURGY<br>" +
            "NIT ANDHRA :METALLURGY<br>" +
            "NIT SRINAGAR :METALLURGY<br>" +
            "NIT NAGPUR :MINING<br>" +
            "NIT RAIPUR :MINING<br>" +
            "NIT JALANDAR :PRODUCTION<br>" +
            "NIT JAMSHEDPUR :PRODUCTION<br>" +
            "NIT JALANDAR :TEXTILE<br>" +
            "NIT JALANDAR :BIO TECH<br>" +
            "NIT DURGAPUR :BIO TECH<br>" +
            "NIT ANDHRA :BIO TECH<br>" +
            "NIT RAIPUR :BIO TECH<br>" +
            "NIT AGARTALA :BIO CHEMICAL<br>" +
            "NIT SRINAGAR :CHEMICAL<br>" +
            "NIT ANDHRA :CIVIL<br>" +
            "NIT SIKKIM :CIVIL<br>" +
            "NIT AGARTALA :CIVIL<br>" +
            "NIT MANIPUR :CIVIL<br>" +
            "NIT ARUNACHAL :CIVIL<br>" +
            "NIT SRINAGAR :CIVIL<br>" +
            "NIT NAGALAND :CIVIL<br>" +
            "NIT MIZORAM :CIVIL";
    }
    else if (jeeRank >= 15000 && jeeRank < 20000 && caste == "OBC") {
        prediction = "NIT SRINAGAR :METALLURGY";
    }
    else if (jeeRank < 100 && caste == "SC")
    {
        prediction ="NIT TIRUCHIRAPPALI :COMPUTER SCIENCE<br>"+
                    "NIT SURATKAL :COMPUTER SCIENCE";
    }
    else if (jeeRank >= 100 && jeeRank < 200 && caste == "SC")
    {
        prediction ="NIT TIRUCHIRAPPALI :COMPUTER SCIENCE<br>"+
                    "NIT SURATKAL :COMPUTER SCIENCE<br>"+
                    "NIT TRICHURAPPALI :ELECTRONICS AND COMMUNICATION";
    }
    else if (jeeRank >= 200 && jeeRank < 300 && caste == "SC")
    {
        prediction = "NIT WARANGLE : COMPUTRE SCIENCE <br>" +
                     "NIT TRICHURAPPALI : ELECTRONICS AND COMMUNICATION <br>" +
                     "NIT SURATKAL : ELECTRONICS AND COMMUNICATION ";
    }
    else if (jeeRank >= 300 && jeeRank < 500 && caste == "SC")
    {
        prediction = "NIT ROURKELA : COMPUTRE SCIENCE <br>" +
                     "NIT ALLAHBAD : COMPUTRE SCIENCE <br>" +
                     "NIT CALICUT : COMPUTRE SCIENCE <br>" +
                     "NIT SURATKAL : ELECTRONICS AND COMMUNICATION <br>" +
                     "NIT TRICHURAPPALI : ELECTRONICS AND COMMUNICATION <br>" +
                     "NIT WARANGLE : ELECTRONICS AND COMMUNICATION <br>" +
                     "NIT SURATKAL : I.T. <br>" +
                     "NIT TRICHURAPPALI : MECHANICAL ";
    }

    else if (jeeRank >= 500 && jeeRank < 1000 && caste == "SC")
    {
        prediction = "NIT NAGPUR : COMPUTRE SCIENCE <br>" +
                     "NIT DURGAPUR : COMPUTRE SCIENCE <br>" +
                     "NIT JAIPUR : COMPUTRE SCIENCE <br>" +
                     "NIT GOA : COMPUTRE SCIENCE <br>" +
                     "NIT KURUKSHETRA : COMPUTRE SCIENCE <br>" +
                     "NIT SURAT : COMPUTRE SCIENCE <br>" +
                     "NIT WARANGLE : ELECTRONICS AND COMMUNICATION <br>" +
                     "NIT ROURKELA : ELECTRONICS AND COMMUNICATION <br>" +
                     "NIT SURATKAL : I.T. <br>" +
                     "NIT ALLAHBAD : I.T. <br>" +
                     "NIT TRICHURAPPALI : MECHANICAL <br>" +
                     "NIT SURATKAL : MECHANICAL <br>" +
                     "NIT WARANGAL : MECHANICAL <br>" +
                     "NIT TIRCHURAPPALI : CHEMICAL <br>" +
                     "NIT WARANGAL : CHEMICAL <br>" +
                     "NIT TIRCHURAPPALI : CIVIL ";
                      
    }
    else if (jeeRank >= 1000 && jeeRank < 2000 && caste == "SC")
    {
        prediction = "NIT BHOPAL : COMPUTRE SCIENCE <br>" +
                     "NIT DELHI : COMPUTRE SCIENCE <br>" +
                     "NIT PATNA : COMPUTRE SCIENCE <br>" +
                     "NIT JALANDAR : COMPUTRE SCIENCE <br>" +
                     "NIT JAMSHEDPUR : COMPUTRE SCIENCE <br>" +
                     "NIT RAIPUR : COMPUTRE SCIENCE <br>" +
                     "NIT AGARTALA : COMPUTRE SCIENCE <br>" +
                     "NIT ANDHRA : COMPUTRE SCIENCE <br>" +
                     "NIT SILCHAR : COMPUTRE SCIENCE <br>" +
                     "NIT HAMIRPUR : COMPUTRE SCIENCE <br>" +
                     "NIT KURUKSHETRA : ELECTRICAL AND ELECTRONICS <br>" +
                     "NIT ROURKELA : ELECTRICAL AND ELECTRONICS <br>" +
                     "NIT JAIPUR : ELECTRICAL AND ELECTRONICS <br>" +
                     "NIT CALICUT : ELECTRONICS AND COMMUNICATION <br>" +
                     "NIT NAGPUR : ELECTRONICS AND COMMUNICATION <br>" +
                     "NIT DELHI : ELECTRONICS AND COMMUNICATION <br>" +
                     "NIT ALLAHBAD : ELECTRONICS AND COMMUNICATION <br>" +
                     "NIT SURAT : ELECTRONICS AND COMMUNICATION <br>" +
                     "NIT JAIPUR : ELECTRONICS AND COMMUNICATION <br>" +
                     "NIT KURUKSHETRA : I.T. <br>" +
                     "NIT JALANDAR : I.T. <br>" +
                     "NIT WARANGAL : MECHANICAL <br>" +
                     "NIT RAIPUR : MECHANICAL <br>" +
                     "NIT ROURKELA : MECHANICAL <br>" +
                     "NIT NAGPUR : MECHANICAL <br>" +
                     "NIT TRICHURAPPALI : METALLURGY <br>" +
                     "NIT ROURKELA : BIO TECH <br>" +
                     "NIT TIRCHURAPPALI : CHEMICAL <br>" +
                     "NIT WARANGAL : CHEMICAL <br>" +
                     "NIT TIRCHURAPPALI : CIVIL <br>" +
                     "NIT WARANGAL : CIVIL <br>" +
                     "NIT SURATKAL : CIVIL <br>" +
                     "NIT JAIPUR : CIVIL <br>" +
                     "NIT ROURKELA : CIVIL ";
    }
    else if (jeeRank >= 2000 && jeeRank < 3000 && caste == "SC")
    {
        prediction = "NIT AGARTALA : COMPUTRE SCIENCE <br>" +
                     "NIT ANDHRA : COMPUTRE SCIENCE <br>" +
                     "NIT SILCHAR : COMPUTRE SCIENCE <br>" +
                     "NIT HAMIRPUR : COMPUTRE SCIENCE <br>" +
                     "NIT PUDUCHERRY : COMPUTRE SCIENCE <br>" +
                     "NIT MEGHALAYA : COMPUTRE SCIENCE <br>" +
                     "NIT UTTRAKHAND : COMPUTRE SCIENCE <br>" +
                     "NIT ARUNACHAL : COMPUTRE SCIENCE <br>" +
                     "NIT KURUKSHETRA : ELECTRICAL AND ELECTRONICS <br>" +
                     "NIT JAIPUR : ELECTRICAL AND ELECTRONICS <br>" +
                     "NIT ALLAHBAD : ELECTRICAL AND ELECTRONICS <br>" +
                     "NIT SURAT : ELECTRONICS AND COMMUNICATION <br>" +
                     "NIT JAIPUR : ELECTRONICS AND COMMUNICATION <br>" +
                     "NIT KURUKSHETRA : ELECTRONICS AND COMMUNICATION <br>" +
                     "NIT DURGAPUR : ELECTRONICS AND COMMUNICATION <br>" +
                     "NIT GOA : ELECTRONICS AND COMMUNICATION <br>" +
                     "NIT JALANDAR : ELECTRONICS AND COMMUNICATION <br>" +
                     "NIT BHOPAL : ELECTRONICS AND COMMUNICATION <br>" +
                     "NIT JAMSHEDPUR : ELECTRONICS AND COMMUNICATION <br>" +
                     "NIT RAIPUR : I.T. <br>" +
                     "NIT RAIPUR : MECHANICAL <br>" +
                     "NIT NAGPUR : MECHANICAL <br>" +
                     "NIT CALICUT : MECHANICAL <br>" +
                     "NIT DURGAPUR : MECHANICAL <br>" +
                     "NIT ALLAHBAD : MECHANICAL <br>" +
                     "NIT JAIPUR : MECHANICAL <br>" +
                     "NIT KURUKSHETRA : MECHANICAL <br>" +
                     "NIT TRICHURAPPALI : METALLURGY <br>" +
                     "NIT ROURKELA : BIO TECH <br>" +
                     "NIT WARANGAL : CHEMICAL <br>" +
                     "NIT CALICUT : CHEMICAL <br>" +
                     "NIT WARANGAL : CIVIL <br>" +
                     "NIT SURATKAL : CIVIL <br>" +
                     "NIT JAIPUR : CIVIL <br>" +
                     "NIT ROURKELA : CIVIL <br>" +
                     "NIT KURUKSHETRA : CIVIL <br>" +
                     "NIT CALICUT : CIVIL <br>" +
                     "NIT HAMIRPUR : CIVIL ";

    }
    else if (jeeRank >= 3000 && jeeRank < 4000 && caste == "SC")
    {
        prediction = "NIT SRINAGAR : COMPUTRE SCIENCE <br>" +
                     "NIT SIKKIM : COMPUTRE SCIENCE <br>" +
                     "NIT MANIPUR : COMPUTRE SCIENCE <br>" +
                     "NIT BHOPAL : ELECTRICAL AND ELECTRONICS <br>" +
                     "NIT HAMIRPUR : ELECTRICAL AND ELECTRONICS <br>" +
                     "NIT JALANDAR : ELECTRICAL AND ELECTRONICS <br>" +
                     "NIT SURAT : ELECTRICAL AND ELECTRONICS <br>" +
                     "NIT SILCHAR : ELECTRONICS AND COMMUNICATION <br>" +
                     "NIT JAMSHEDPUR : ELECTRONICS AND COMMUNICATION <br>" +
                     "NIT PUDUCHERRY : ELECTRONICS AND COMMUNICATION <br>" +
                     "NIT HAMIRPUR : ELECTRONICS AND COMMUNICATION <br>" +
                     "NIT ANDHRA : ELECTRONICS AND COMMUNICATION <br>" +
                     "NIT RAIPUR : MECHANICAL <br>" +
                     "NIT DURGAPUR : MECHANICAL <br>" +
                     "NIT ALLAHBAD : MECHANICAL <br>" +
                     "NIT JAIPUR : MECHANICAL <br>" +
                     "NIT KURUKSHETRA : MECHANICAL <br>" +
                     "NIT BHOPAL : MECHANICAL <br>" +
                     "NIT SURAT : MECHANICAL <br>" +
                     "NIT TRICHURAPPALI : METALLURGY <br>" +
                     "NIT WARANGAL : METALLURGY <br>" +
                     "NIT SURATKAL : METALLURGY <br>" +
                     "NIT ROURKELA : BIO TECH <br>" +
                     "NIT WARANGAL : CHEMICAL <br>" +
                     "NIT CALICUT : CHEMICAL <br>" +
                     "NIT ROURKELA : CHEMICAL <br>" +
                     "NIT ALLAHBAD : CHEMICAL <br>" +
                     "NIT JAIPUR : CIVIL <br>" +
                     "NIT KURUKSHETRA : CIVIL <br>" +
                     "NIT HAMIRPUR : CIVIL <br>" +
                     "NIT RAIPUR : CIVIL ";
    }
    else if (jeeRank >= 4000 && jeeRank < 5000 && caste == "SC")
    {
        prediction = "NIT SIKKIM : COMPUTRE SCIENCE <br>" +
                     "NIT MANIPUR : COMPUTRE SCIENCE <br>" +
                     "NIT MIZORAM : COMPUTRE SCIENCE <br>" +
                     "NIT NAGALAND : COMPUTRE SCIENCE <br>" +
                     "NIT JAMSHEDPUR : ELECTRICAL AND ELECTRONICS <br>" +
                     "NIT SILCHAR : ELECTRICAL AND ELECTRONICS <br>" +
                     "NIT DURGAPUR : ELECTRICAL AND ELECTRONICS <br>" +
                     "NIT RAIPUR : ELECTRICAL AND ELECTRONICS <br>" +
                     "NIT PATNA : ELECTRICAL AND ELECTRONICS <br>" +
                     "NIT MANIPUR : ELECTRICAL AND ELECTRONICS <br>" +
                     "NIT SRINAGAR : I.T. <br>" +
                     "NIT RAIPUR : MECHANICAL <br>" +
                     "NIT DURGAPUR : MECHANICAL <br>" +
                     "NIT BHOPAL : MECHANICAL <br>" +
                     "NIT SURAT : MECHANICAL <br>" +
                     "NIT JAMSHEDPUR : MECHANICAL <br>" +
                     "NIT HAMIRPUR : MECHANICAL <br>" +
                     "NIT JALANDAR : MECHANICAL <br>" +
                     "NIT PATNA : MECHANICAL <br>" +
                     "NIT WARANGAL : METALLURGY <br>" +
                     "NIT ROURKELA : METALLURGY <br>" +
                     "NIT ROURKELA : BIO TECH <br>" +
                     "NIT WARANGAL : BIO TECH <br>" +
                     "NIT CALICUT : BIO TECH <br>" +
                     "NIT ANDHRA : BIO TECH <br>" +
                     "NIT JALANDAR : BIO TECH <br>" +
                     "NIT CALICUT : CHEMICAL <br>" +
                     "NIT ROURKELA : CHEMICAL <br>" +
                     "NIT ALLAHBAD : CHEMICAL <br>" +
                     "NIT NAGPUR : CHEMICAL <br>" +
                     "NIT AGARTALA : CHEMICAL <br>" +
                     "NIT JAIPUR : CIVIL <br>" +
                     "NIT HAMIRPUR : CIVIL <br>" +
                     "NIT RAIPUR : CIVIL <br>" +
                     "NIT DURGAPUR : CIVIL <br>" +
                     "NIT JAMSHEDPUR : CIVIL <br>" +
                     "NIT UTTRAKHAND : CIVIL <br>" +
                     "NIT PATNA : CIVIL <br>" +
                     "NIT ANDHRA : CIVIL <br>" +
                     "NIT GOA : CIVIL ";

    }
    else if (jeeRank >= 5000 && jeeRank < 7500 && caste == "SC")
    {
        prediction = "NIT AGARTALA : COMPUTRE SCIENCE <br>" +
                     "NIT SRINAGAR : COMPUTRE SCIENCE <br>" +
                     "NIT MANIPUR : COMPUTRE SCIENCE <br>" +
                     "NIT ARUNACHAL : COMPUTRE SCIENCE <br>" +
                     "NIT PATNA : ELECTRICAL AND ELECTRONICS <br>" +
                     "NIT AGARTALA : ELECTRICAL AND ELECTRONICS <br>" +
                     "NIT SRINAGAR : ELECTRICAL AND ELECTRONICS <br>" +
                     "NIT ARUNACHAL : ELECTRICAL AND ELECTRONICS <br>" +
                     "NIT SIKKIM : ELECTRONICS AND COMMUNICATION <br>" +
                     "NIT SRINAGAR : ELECTRONICS AND COMMUNICATION <br>" +
                     "NIT MEGHALAYA : ELECTRONICS AND COMMUNICATION <br>" +
                     "NIT NAGALAND : ELECTRONICS AND COMMUNICATION <br>" +
                     "NIT MIZORAM : ELECTRONICS AND COMMUNICATION <br>" +
                     "NIT ROURKELA : FOOD <br>" +
                     "NIT SRINAGAR : I.T. <br>" +
                     "NIT PATNA : MECHANICAL <br>" +
                     "NIT ANDHRA : MECHANICAL <br>" +
                     "NIT SILCHAR : MECHANICAL <br>" +
                     "NIT PUDUCHERRY : MECHANICAL <br>" +
                     "NIT MANIPUR : MECHANICAL <br>" +
                     "NIT SIKKIM : MECHANICAL <br>" +
                     "NIT ROURKELA : METALLURGY <br>" +
                     "NIT JAIPUR : METALLURGY <br>" +
                     "NIT BHOPAL : METALLURGY <br>" +
                     "NIT DURGAPUR : METALLURGY <br>" +
                     "NIT RAIPUR : METALLURGY <br>" +
                     "NIT JAMSHEDPUR : METALLURGY <br>" +
                     "NIT ANDHRA : METALLURGY <br>" +
                     "NIT ROURKELA : BIO TECH <br>" +
                     "NIT WARANGAL : BIO TECH <br>" +
                     "NIT ANDHRA : BIO TECH <br>" +
                     "NIT JALANDAR : BIO TECH <br>" +
                     "NIT ALLAHBAD : BIO TECH <br>" +
                     "NIT DURGAPUR : BIO TECH <br>" +
                     "NIT JALANDAR : BIO TECH <br>" +
                     "NIT CALICUT : CHEMICAL <br>" +
                     "NIT NAGPUR : CHEMICAL <br>" +
                     "NIT SURAT : CHEMICAL <br>" +
                     "NIT JALANDAR : CHEMICAL <br>" +
                     "NIT BHOPAL : CHEMICAL <br>" +
                     "NIT AGARTALA : CHEMICAL <br>" +
                     "NIT SRINAGAR : CHEMICAL <br>" +
                     "NIT DURGAPUR : CIVIL <br>" +
                     "NIT JAMSHEDPUR : CIVIL <br>" +
                     "NIT PATNA : CIVIL <br>" +
                     "NIT ANDHRA : CIVIL <br>" +
                     "NIT SIKKIM : CIVIL <br>" +
                     "NIT SRINAGAR : CIVIL <br>" +
                     "NIT MEGHALAYA : CIVIL <br>" +
                     "NIT MANIPUR : CIVIL <br>" +
                     "NIT ARUNACHAL : CIVIL <br>" +
                     "NIT NAGALAND : CIVIL <br>" +
                     "NIT MIZORAM : CIVIL <br>" +
                     "NIT GOA : CIVIL ";

    }
    else if (jeeRank >= 7500 && jeeRank < 10000 && caste == "SC")
    {
        prediction = "NIT RAIPUR : METALLURGY <br>" +
                     "NIT BHOPAL : METALLURGY <br>" +
                     "NIT JAMSHEDPUR : METALLURGY <br>" +
                     "NIT ANDHRA : METALLURGY <br>" +
                     "NIT SRINAGAR : METALLURGY <br>" +
                     "NIT JALANDAR : BIO TECH <br>" +
                     "NIT ALLAHBAD : BIO TECH <br>" +
                     "NIT DURGAPUR : BIO TECH <br>" +
                     "NIT JALANDAR : BIO TECH <br>" +
                     "NIT AGARTALA : CHEMICAL <br>" +
                     "NIT SIKKIM : CIVIL <br>" +
                     "NIT SRINAGAR : CIVIL <br>" +
                     "NIT MEGHALAYA : CIVIL <br>" +
                     "NIT MANIPUR : CIVIL <br>" +
                     "NIT ARUNACHAL : CIVIL <br>" +
                     "NIT NAGALAND : CIVIL <br>" +
                     "NIT MIZORAM : CIVIL <br>" +
                     "NIT GOA : CIVIL ";
    }
    else if (jeeRank < 200 && caste =="ST")
    {
        prediction =
            "NIT TIRUCHIRAPALI : COMPUTER SCIENCE<br>" +
            "NIT JAIPUR : COMPUTER SCIENCE<br>" +
            "NIT WARANGAL : COMPUTER SCIENCE<br>" +
            "NIT SURATHKAL : COMPUTER SCIENCE<br>" +
            "NIT ROURKELA : COMPUTER SCIENCE<br>" +
            "NIT CALICUT : COMPUTER SCIENCE<br>" +
            "NIT TIRUCHIRAPALLI :ELECTRONICS AND COMMUNICATION <br>" +
            "NTI JALANDHAR: ELECTRICAL <br>" +
            "NIT TIRUCHIRAPALLI: CIVIL ENGINEERING <br>" +
            "NIT SURATHKAL: CIVIL ENGINEERING ";
    }

    else if (jeeRank >= 200 && jeeRank < 400 && caste =="ST")
    {
        prediction = "NIT ALLAHBAD : COMPUTER SCIENCE<br>" +
                     "NIT NAGPUR : COMPUTER SCIENCE<br>" +
                     "NIT CALICUT : COMPUTER SCIENCE<br>" +
                     "NIT CALICUT : COMPUTER SCIENCE<br>" +
                     "NIT PUDUCHERRY : COMPUTER SCIENCE<br>" +
                     "NIT KURUKHESTRA : COMPUTER SCIENCE<br>" +
                     "NIT SURAT : COMPUTER SCIENCE<br>" +
                     "NIT SURATKHAL: ELECTRONICS AND COMMUNICATION <br>" +
                     "NIT ROURKELA: ELECTRONICS AND COMMUNICATION <br>" +
                     "NIT WARANGAL: ELECTRONICS AND COMMUNICATION <br>" +
                     "NIT DELHI: ELECTRONICS AND COMMUNICATION <br>" +
                     "NIT CALICUT: ELECTRONICS AND COMMUNICATION <br>" +
                     "NTI JALANDHAR: ELECTRICAL <br>" +
                     "NIT TIRUCHIRAPALLI: CIVIL ENGINEERING <br>" +
                     "NIT SURATHKAL: CIVIL ENGINEERING <br>" +
                     "NIT ROURKELA: MECHANICAL ENGINEERING <br>" +
                     "NIT TIRUCHIRAPALLI: MECHANICAL ENGINEERING <br>" +
                     "NIT CALICUT: BIOTECHNOLOGY  ";
    }
    else if (jeeRank >= 400 && jeeRank < 500 && caste =="ST")
    {

        prediction = "NIT SILCHAR : COMPUTER SCIENCE<br>" +
                     "NIT BHOPAL : COMPUTER SCIENCE<br>" +
                     "NIT CALICUT : COMPUTER SCIENCE<br>" +
                     "NIT DELHI : COMPUTER SCIENCE<br>" +
                     "NIT JALANDHAR : COMPUTER SCIENCE<br>" +
                     "NIT DURGAPUR : COMPUTER SCIENCE<br>" +
                     "NIT ROURKELA : ELECTRONICS AND COMMUNICATION<br>" +
                     "NIT WARANGAL : ELECTRONICS AND COMMUNICATION<br>" +
                     "NIT CALICUT : ELECTRONICS AND COMMUNICATION<br>" +
                     "NTI JALANDHAR: ELECTRICAL <br>" +
                     "NTI ALLAHBAD: ELECTRICAL <br>" +
                     "NIT WARANGAL: CIVIL ENGINEERING <br>" +
                     "NIT ROURKELA: CIVIL ENGINEERING <br>" +
                     "NIT ROURKELA: MECHANICAL ENGINEERING <br>" +
                     "NIT TIRUCHIRAPALLI: MECHANICAL ENGINEERING ";
    }

    else if (jeeRank >= 500 && jeeRank < 1000 && caste =="ST")
    {
        prediction = "NIT GOA : COMPUTER SCIENCE<br>" +
                     "NIT SILCHAR : COMPUTER SCIENCE<br>" +
                     "NIT JALANDHAR : COMPUTER SCIENCE<br>" +
                     "NIT BHOPAL : COMPUTER SCIENCE<br>" +
                     "NIT JAMSHEDPUR : COMPUTER SCIENCE<br>" +
                     "NIT JAIPUR : COMPUTER SCIENCE<br>" +
                     "NIT DURGAPUR : COMPUTER SCIENCE<br>" +
                     "NIT WARANGAL : ELECTRONICS AND COMMUNICATION<br>" +
                     "NIT NAGPUR : ELECTRONICS AND COMMUNICATION<br>" +
                     "NIT ALLAHBAD : ELECTRONICS AND COMMUNICATION<br>" +
                     "NIT PUDUCHERRY : ELECTRONICS AND COMMUNICATION<br>" +
                     "NIT KURUKHESTRA : ELECTRONICS AND COMMUNICATION<br>" +
                     "NIT JAIPUR: ELECTRONICS AND COMMUNICATION <br>" +
                     "NTI ALLAHBAD: ELECTRICAL <br>" +
                     "NTI ROURKELA: ELECTRICAL <br>" +
                     "NTI KURKSHETRA: ELECTRICAL <br>" +
                     "NTI SURAT: ELECTRICAL <br>" +
                     "NTI JAMSEDHPUR: ELECTRICAL <br>" +
                     "NTI JAIPUR: ELECTRICAL <br>" +
                     "NIT WARANGAL: CIVIL ENGINEERING <br>" +
                     "NIT ROURKELA: CIVIL ENGINEERING <br>" +
                     "NIT ALLAHBAD: CIVIL ENGINEERING <br>" +
                     "NIT KRUKSHETRA: CIVIL ENGINEERING <br>" +
                     "NIT SURAT: CIVIL ENGINEERING <br>" +
                     "NIT CALICUT: CIVIL ENGINEERING <br>" +
                     "NIT BHOPAL: CIVIL ENGINEERING <br>" +
                     "NIT DURGAPUR: CIVIL ENGINEERING <br>" +
                     "NIT NAGPUR: CIVIL ENGINEERING <br>" +
                     "NIT JALNDHAR: CIVIL ENGINEERING <br>" +
                     "NIT ROURKELA: MECHANICAL ENGINEERING <br>" +
                     "NIT WARANGAL: MECHANICAL ENGINEERING <br>" +
                     "NIT SURATHKAL: MECHANICAL ENGINEERING <br>" +
                     "NIT NAGPUR: MECHANICAL ENGINEERING <br>" +
                     "NIT CALICUT: MECHANICAL ENGINEERING <br>" +
                     "NIT TIRUCHIRAPALLI: CHEMICAL ENGINEERING  <br>" +
                     "NIT CALICUT: CHEMICAL ENGINEERING  <br>" +
                     "NIT WARANGAL: CHEMICAL ENGINEERING  <br>" +
                     "NIT SURATHKAL: CHEMICAL ENGINEERING  ";
    }
    else if (jeeRank >= 1000 && jeeRank < 2000 && caste =="ST")
    {
        prediction =
            "NIT DURGAPUR : COMPUTER SCIENCE<br>" +
            "NIT KURUKHESTRA : COMPUTER SCIENCE<br>" +
            "NIT SURAT : COMPUTER SCIENCE<br>" +
            "NIT BHOPAL : COMPUTER SCIENCE<br>" +
            "NIT PATNA : COMPUTER SCIENCE<br>" +
            "NIT DELHI : COMPUTER SCIENCE<br>" +
            "NIT JALANDHAR : COMPUTER SCIENCE<br>" +
            "NIT JAMSHEDPUR : COMPUTER SCIENCE<br>" +
            "NIT PATNA : COMPUTER SCIENCE<br>" +
            "NIT RAIPUR : COMPUTER SCIENCE<br>" +
            "NIT AGARTALA : COMPUTER SCIENCE<br>" +
            "NIT SURAT : ELECTRONICS AND COMMUNICATION<br>" +
            "NIT DELHI : ELECTRONICS AND COMMUNICATION<br>" +
            "NIT JAIPUR : ELECTRONICS AND COMMUNICATION<br>" +
            "NIT CALICUT : ELECTRONICS AND COMMUNICATION<br>" +
            "NIT SURAT : ELECTRONICS AND COMMUNICATION<br>" +
            "NIT BHOPAL: ELECTRONICS AND COMMUNICATION <br>" +
            "NIT PUDUCHERRY: ELECTRONICS AND COMMUNICATION <br>" +
            "NIT DURGAPUR: ELECTRONICS AND COMMUNICATION <br>" +
            "NIT GOA: ELECTRONICS AND COMMUNICATION <br>" +
            "NIT SLICHAR: ELECTRONICS AND COMMUNICATION <br>" +
            "NIT JAMSEDHPUR: ELECTRONICS AND COMMUNICATION <br>" +
            "NIT JALANDHAR: ELECTRONICS AND COMMUNICATION <br>" +
            "NIT HAMIRPUR: ELECTRONICS AND COMMUNICATION <br>" +
            "NIT RAIPUR: ELECTRONICS AND COMMUNICATION <br>" +
            "NIT ANDHRA PRADESH: ELECTRONICS AND COMMUNICATION <br>" +
            "NIT PATNA: ELECTRONICS AND COMMUNICATION <br>" +
            "NIT AGARTALA: ELECTRONICS AND COMMUNICATION <br>" +
            "NTI JALANDHAR: ELECTRICAL <br>" +
            "NTI SURAT: ELECTRICAL <br>" +
            "NTI JAMSEDHPUR: ELECTRICAL <br>" +
            "NTI JAIPUR: ELECTRICAL <br>" +
            "NTI DURGAPUR: ELECTRICAL <br>" +
            "NTI BHOPAL: ELECTRICAL <br>" +
            "NTI HAMIRPUR: ELECTRICAL <br>" +
            "NTI SILCHAR: ELECTRICAL <br>" +
            "NTI PATNA: ELECTRICAL <br>" +
            "NTI RAIPUR: ELECTRICAL <br>" +
            "NIT ANDHRA PRADESH: CIVIL ENGINEERING <br>" +
            "NIT JAIPUR: CIVIL ENGINEERING <br>" +
            "NIT SILCHAR: CIVIL ENGINEERING <br>" +
            "NIT HAMIRPUR: CIVIL ENGINEERING <br>" +
            "NIT JAMESDHPUR: CIVIL ENGINEERING <br>" +
            "NIT PATNA: CIVIL ENGINEERING <br>" +
            "NIT MEGHALAYA: CIVIL ENGINEERING <br>" +
            "NIT SRINAGAR: CIVIL ENGINEERING <br>" +
            "NIT GOA: CIVIL ENGINEERING <br>" +
            "NIT ALLAHBAD: MECHANICAL ENGINEERING <br>" +
            "NIT JAIPUR: MECHANICAL ENGINEERING <br>" +
            "NIT SURAT: MECHANICAL ENGINEERING <br>" +
            "NIT SILCHAR: MECHANICAL ENGINEERING <br>" +
            "NIT DURGAPUR: MECHANICAL ENGINEERING <br>" +
            "NIT JALANDHAR: MECHANICAL ENGINEERING <br>" +
            "NIT BHOPAL: MECHANICAL ENGINEERING <br>" +
            "NIT GOA: MECHANICAL ENGINEERING <br>" +
            "NIT HAMIRPUR: MECHANICAL ENGINEERING <br>" +
            "NIT ANDRA PRADESH: MECHANICAL ENGINEERING <br>" +
            "NIT JAMSEDHPUR: MECHANICAL ENGINEERING <br>" +
            "NIT WARANGAL: METALLURGICAL ENGINEERING <br>" +
            "NIT TIRUCHIRAPALLI: METALLURGICAL ENGINEERING <br>" +
            "NIT ROURKELA: METALLURGICAL ENGINEERING <br>" +
            "NIT SURATHKAL: METALLURGICAL ENGINEERING <br>" +
            "NIT ROURKELA: BIOTECHNOLOGY  <br>" +
            "NIT WARANGAL: BIOTECHNOLOGY  <br>" +
            "NIT ALHAABAD: BIOTECHNOLOGY  <br>" +
            "NIT WARANGAL: CHEMICAL ENGINEERING  <br>" +
            "NIT CALICUT: CHEMICAL ENGINEERING  <br>" +
            "NIT ROURKELA: CHEMICAL ENGINEERING  <br>" +
            "NIT NAGPUR: CHEMICAL ENGINEERING  <br>" +
            "NIT JALANDHAR: CHEMICAL ENGINEERING  <br>" +
            "NIT ALLAHBAD: CHEMICAL ENGINEERING  ";
    }
    else if (jeeRank >= 2000 && jeeRank < 3000 && caste =="ST")
    {
        prediction =

            "NIT AGARTALA : COMPUTER SCIENCE<br>" +
            "NIT PUDUCHERRY : COMPUTER SCIENCE<br>" +
            "NIT UTTARAKHAND : COMPUTER SCIENCE<br>" +
            "NIT ANDHRA PRADESH : COMPUTER SCIENCE<br>" +
            "NIT SILCHAR : COMPUTER SCIENCE<br>" +
            "NIT ARUNACHAL PRADESH : COMPUTER SCIENCE<br>" +
            "NIT UTTRAKHAND: ELECTRONICS AND COMMUNICATION <br>" +
            "NIT MANIPUR: ELECTRONICS AND COMMUNICATION <br>" +
            "NIT SIKKIM: ELECTRONICS AND COMMUNICATION <br>" +
            "NIT MEGHALAYA: ELECTRONICS AND COMMUNICATION <br>" +
            "NIT NAGALAND: ELECTRONICS AND COMMUNICATION <br>" +
            "NIT SRINAGAR: ELECTRONICS AND COMMUNICATION <br>" +
            "NTI AGARTALA: ELECTRICAL <br>" +
            "NTI SRINGAR: ELECTRICAL <br>" +
            "NTI ARUNACHAR PRADESH: ELECTRICAL <br>" +
            "NTI MANIPUR: ELECTRICAL <br>" +
            "NIT UTTRAKHAND: CIVIL ENGINEERING <br>" +
            "NIT SRINGAR: CIVIL ENGINEERING <br>" +
            "NIT PUDUCHERRY: CIVIL ENGINEERING <br>" +
            "NIT AGARTALA: CIVIL ENGINEERING <br>" +
            "NIT ARUNACHAL PRADESH: CIVIL ENGINEERING <br>" +
            "NIT SIKKIM: CIVIL ENGINEERING <br>" +
            "NIT NAGALAND: CIVIL ENGINEERING <br>" +
            "NIT MIZORAM: CIVIL ENGINEERING <br>" +
            "NIT PUDUCHERRY: MECHANICAL ENGINEERING <br>" +
            "NIT PATNA: MECHANICAL ENGINEERING <br>" +
            "NIT AGARTALA: MECHANICAL ENGINEERING <br>" +
            "NIT UTTRAKHAND: MECHANICAL ENGINEERING <br>" +
            "NIT MANIPUR: MECHANICAL ENGINEERING <br>" +
            "NIT SRINAGAR: MECHANICAL ENGINEERING <br>" +
            "NIT MEGHALAYA: MECHANICAL ENGINEERING <br>" +
            "NIT NAGALAND: MECHANICAL ENGINEERING <br>" +
            "NIT MIZORAM: MECHANICAL ENGINEERING <br>" +
            "NIT ARUNCHAL PRADESH: MECHANICAL ENGINEERING <br>" +
            "NIT NAGPUR: METALLURGICAL ENGINEERING <br>" +
            "NIT ANDHRA PRADESH: METALLURGICAL ENGINEERING <br>" +
            "NIT JAMSEDHPUR: METALLURGICAL ENGINEERING <br>" +
            "NIT RAIPUR: METALLURGICAL ENGINEERING <br>" +
            "NIT JAIPUR: METALLURGICAL ENGINEERING <br>" +
            "NIT BHOPAL: METALLURGICAL ENGINEERING <br>" +
            "NIT DURGAPUR: METALLURGICAL ENGINEERING <br>" +
            "NIT ALHAABAD: BIOTECHNOLOGY  <br>" +
            "NIT ANDHRA PRADESH: BIOTECHNOLOGY  <br>" +
            "NIT JALANDHAR: BIOTECHNOLOGY  <br>" +
            "NIT DURGAPUR: BIOTECHNOLOGY  <br>" +
            "NIT ALHAABAD: BIOTECHNOLOGY  <br>" +
            "NIT ROURKELA: CERAMIC  <br>" +
            "NIT BHOPAL: CHEMICAL ENGINEERING  <br>" +
            "NIT JAIPUR: CHEMICAL ENGINEERING  <br>" +
            "NIT SURAT: CHEMICAL ENGINEERING  <br>" +
            "NIT ANDHRA PRADESH: CHEMICAL ENGINEERING  <br>" +
            "NIT DURGAPUR: CHEMICAL ENGINEERING  <br>" +
            "NIT RAIPUR: CHEMICAL ENGINEERING  <br>" +
            "NIT AGARTALA: CHEMICAL ENGINEERING  <br>" +
            "NIT HAMIRPUR: CHEMICAL ENGINEERING  ";
    }
    else if (jeeRank >= 3000 && jeeRank < 4000 && caste =="ST")
    {
        prediction = "NIT SRINAGAR : COMPUTER SCIENCE<br>" +
                     "NIT PATNA : COMPUTER SCIENCE<br>" +
                     "NIT SIKKIM : COMPUTER SCIENCE<br>" +
                     "NIT MANIPUR : COMPUTER SCIENCE<br>" +
                     "NIT MIZORAM : COMPUTER SCIENCE<br>" +
                     "NIT NAGALAND : COMPUTER SCIENCE<br>" +
                     "NIT ANDHRA PRADESH : ELECTRONICS AND COMMUNICATION<br>" +
                     "NIT JAMSHEDPUR : ELECTRONICS AND COMMUNICATION<br>" +
                     "NIT HAMIRPUR : ELECTRONICS AND COMMUNICATION<br>" +
                     "NIT RAIPUR : ELECTRONICS AND COMMUNICATION<br>" +
                     "NIT PUDUCHERRY : ELECTRONICS AND COMMUNICATION<br>" +
                     "NIT AGARTALA :ELECTRONICS AND COMMUNICATION <br>" +
                     "NIT JAMSEDHPUR: MECHANICAL ENGINEERING <br>" +
                     "NIT SRINGAR: METALLURGICAL ENGINEERING <br>" +
                     "NIT RAIPUR: BIOTECHNOLOGY  <br>" +
                     "NIT AGARTALA: BIOTECHNOLOGY  <br>" +
                     "NIT AGARTALA: CHEMICAL ENGINEERING  <br>" +
                     "NIT SRINAGAR: CHEMICAL ENGINEERING  ";
    }

    // Add more conditions for other rank ranges
    const predictionResult = document.getElementById("prediction-result");
    predictionResult.innerHTML = prediction;
    predictionResult.style.display = "block";
}