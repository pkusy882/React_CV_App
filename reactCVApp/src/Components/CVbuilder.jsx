

function buildCV(personalData,educationData,workData){

    //creates the education section for viewing the cv
    function educationCVsection(educationData){
        return(
            educationData.map(function(education){
                return(
                    <div className="educationSection">
                        <div className="nameAndDate">
                            <p>{education.nameOfInstitute}</p>
                            <p>{education.startDate +" - "+education.endDate}</p>
                        </div>
                        <p>{"Grades achieved: "+education.gradesAchieved}</p>
                    </div>
                )
            })
        )
    }

    function workCVSection(workData){
          //creates the work section for viewing the cv
        return(
            workData.map(function(work){
                return(
                    <div className="workSection">
                        <p>{"Name of company: "+work.companyName}</p>
                        <p>{"Date Attended: "+work.startDate +" - "+work.endDate}</p>
                        <p>{"Responsibilitys: "+work.responsibilitys}</p>
                    </div>
                )
            })
        )
    }
    
    //renders all sections of the cv onto a A4 page
    return(
        <div className="CV">
            <div className="topBarCont">
                <p className="fullName">{personalData.firstName+" "+personalData.surname}</p>
                <div className="emailPhone">
                    <p>{"Email address: "+personalData.email}</p>
                    <p>{"Phone Number: "+personalData.number}</p>
                </div>
            </div>
            <div className="education">
                {educationCVsection(educationData)}
            </div>
            <div className="work">
                {workCVSection(workData)}
            </div>
        </div>
    )
}

export default buildCV