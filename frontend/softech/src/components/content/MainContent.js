import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBugSlash } from '@fortawesome/free-solid-svg-icons';
export default function MainContent(){
    return(
        <>
            <div className="sm:flex w-3/4 mx-auto h-full mt-10">
                <div className="w-2/4 mt-14 ">
                    <h1 className="leading-7 tracking-widest font-bold text-2xl mb-8 text-center text-gray-950 uppercase">Software Testing Training</h1>
                    <p className="font-medium text-sm leading-7 text-justify ">Software Testing Training in Pune at <i className="font-bold  text-gray-700">SOFTTECH</i> is a 
                        comprehensive training program which equips you with 
                        advanced and modified techniques and strategies 
                        in the field of software testing. This professional 
                        certification will modify you into a software specialist 
                        possessing in-depth knowledge and competence in types,
                         tools and strategies of software testing like unit, 
                         integration, validation and system testing. The Software 
                         Testing Course in Pune at <i className="font-bold text-gray-700">SOFTTECH</i> will aim to adapt you with 
                         contemporary practices of software testing with our proficient 
                         trainers who have gained experience and worked for a wide range of leading organisations.</p>
                </div>
                <div className="w-1/3 ml-16 h-2/3 ">
                    <div class="h-full bg-gray-100 drop-shadow-xl rounded-md">
                        <div className="h-full sm:flex flex-col justify-between ">
                        
                             <FontAwesomeIcon icon={faBugSlash} className="font-bold h-16 mt-14 text-orange-500 mb-8"/>
                            <div>
                                <h2 className="px-1 py-1 bg-orange-600 text-center m-4 mb-0 text-white uppercase tracking-widest font-bold">Software Testing</h2>
                                <h2 className="text-center uppercase tracking-widest font-bold">certification Training</h2>
                            </div>

                            <div className="px-4 py-4 bg-green-600 text-center m-4">
                            <h4 className="text-white font-bold text-xl tracking-widest">Have Queries</h4>
                            <p className="text-white text-sm tracking-wider">Call @987654321</p>
                            </div>
                        
                        <button className="px-4 py-4  bg-orange-600 text-center m-4 flex-1 mb-40 text-white font-bold tracking-widest">ENQUIRE NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}