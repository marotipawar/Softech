import React from 'react';
import fish from './img/fish.jpg';
export default function Sdlc(){
    
    return(
        <div className='mx-4'>
            <ul class="text-slate-700 text-sm leading-6">
                <li class="ml-4">
                    <h1 className="text-2xl font-bold text-center mb-4">Software Development Life Cycle</h1>
                    <p className="text-sm leading-7 indent-8 text-justify mb-4">
                    It is also called as software development process.
                    It is a process which defines the task performed at each step in the software
                    development process. It is process which is followed by the software organization to develop
                    a good quality of software product. It contains the detailed description about how to develop
                    software, how to maintain and if there is any change want by customer then how to adopt
                    that change. These are the different stages or task which comes under the software
                    development process. This development life cycle mainly defines how to improve the quality
                    of software and overall development process. Basically SDLC mainly divided into two types
                    that is life cycle of development and life cycle of testing.
                    SDLC ratio is 3:1 it means that 3 developer and 1 test engineer. Life cycle of development
                    comes under upper angle while life cycle of testing comes under lower angle.
                    </p>
        
                </li>
                <li className="ml-4">
                    
                <a href="#removing-the-shadow"
                class="group flex items-start py-1 hover:text-slate-900 dark:text-gray-800 dark:hover:text-gray-800 font-semibold">
                <svg width="3" height="24" viewBox="0 -9 3 24"
                    class="font-semibold mr-2 text-slate-800 overflow-visible group-hover:text-gray-800-600 dark:text-gray-800 dark:group-hover:text-gray-800">
                    <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                    </path>
                </svg>
                WHAT IS FISH MODEL? OR EXPLAIN SDLC PHASES? </a>
                <p className="indent-8 text-justify mb-4">
                It is a process oriented company’s development model. By using this model development and
                testing get conducted. Fish model explain the mapping between developments and testing.
                In fish model we have to do testing from starting of project it means from project initiation
                mode to its maintenance node. To develop a software if we use fish model then we have to
                invest lots of money because it’s highly time consuming and money also. Apart from this by
                using this fish model, we can deliver a good quality of software to customer. 
                </p>
                <div className='flex justify-center'>
                    <img src={fish} className="object-fit h-48 w-96 " alt="Fish Model"></img>
                </div>
                </li>
                <ul className='ml-4 list-disc mt-4'>
                    <li className="ml-4 mb-4">
                        <h1 className='font-semibold mb-4'>Phase 1: (Information gathering) Business Requirement Specification. </h1>
                        <p className='indent-8 text-justify mb-4'>
                        Here in this phase, BA people collect requirements form client and prepare the BRS
                        (Business Requirement Specification) document. This is most important phase in
                        development stage. With the help of this document developer can develop software. 

                        </p>
                    </li>
                    <li className="ml-4 mb-4">
                        <h1 className='font-semibold mb-4'>Phase 2: (SRS) System Requirement Specification and analysis. </h1>
                        <p className='indent-8 text-justify mb-4'>
                            This is most important phase where BA people prepare SRS with the help of BRS
                            document. Here they achieve functional requirement to develop and system requirement to
                            be used.
                            Basically SRS consist of Snap shot, functional requirement, use case, functional flow
                            diagram and high level design. Use case defines functionality in terms of input, output and
                            process. It means that what we have to require developing software. 
                        </p>
                    </li>
                    <li className="ml-4 mb-4">
                        <h1 className='font-semibold mb-4'>Phase 3: (design phase) </h1>
                        <p className='indent-8 text-justify mb-4'>
                        A design approach clearly defines all the architectural module of the product along
                        with its communication and data flow representation. Design phase includes high level
                        design and low level design. This is done by senior developer or project architect. 
                        </p>
                    </li>
                    <li className="ml-4 mb-4">
                        <h1 className='font-semibold mb-4'>Phase 4: (Coding) </h1>
                        <p className='indent-8 text-justify mb-4'>
                        Actual development process starts here. Here developer writes the code and develop the
                        software now question arise that what is coding. Coding means set of software program
                        written by development team to physically construct software. 
                        </p>
                    </li>
                    <li className="ml-4 mb-4">
                        <h1 className='font-semibold mb-4'>Phase 5: (Testing) </h1>
                        <p className='indent-8 text-justify mb-4'>
                        In this phase product is tested. Here product defects are reported, tracked, fixed and
                        retested until the product reaches to quality defined by SRS. This is done by test engineer.
                        Here testing is divided into two types. That is static testing and dynamic testing. 
                        </p>
                        <span className='block'><b >Static Testing: </b></span>
                        <p className='indent-7'>
                       
                        It is verification testing where we test the requirement document and design document
                        prior to software being developed. That is testing without giving any input. This testing is
                        done during design and analysis phase using review technique. Work document can be of
                        following types
                        <ol className='list-decimal ml-8' >
                            <li>Requirement specification</li>
                            <li>Design documents</li>
                            <li>Source code</li>
                            <li>Test plan</li>
                            <li>Test case</li>
                            <li>Test script</li>

                        </ol>
                     </p>
                     <span> <b> Dynamic Testing: </b></span>
                        <p className='indent-7'>
                      
                        Dynamic testing is a validation testing where we have to test software is being
                        developed. Here we have to provide some input and validate the output. Here, actual code
                        gets executed. It checks functional behavior of software system, memory CPU usages and
                        overall performance of system. Dynamic testing is performed at all level of testing. It can be
                        done by using white box testing and black box testing. 
                        </p>
                    </li>
                    <li className="ml-4 mb-4">
                        <h1 className='font-semibold mb-4'>Phase 6: (Maintenance phase) </h1>
                        <p className='indent-8 text-justify mb-4'>
                        Once the product is tested and ready to be deployed to market then it is released
                        formally in the appropriate market. This involves correction, adaptive, re-engineering, and
                        enhancement. </p>
                    </li>

                </ul>

                <li className="ml-4 mb-4">
                <a href="#removing-the-shadow"
                class="group flex items-start py-1 hover:text-slate-900 dark:text-gray-800 dark:hover:text-gray-800 font-semibold">
                <svg width="3" height="24" viewBox="0 -9 3 24"
                    class="font-semibold mr-2 text-slate-800 overflow-visible group-hover:text-gray-800-600 dark:text-gray-800 dark:group-hover:text-gray-800">
                    <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                    </path>
                </svg>
                Business Requirement Specification (BRS) </a>
                        <ul className='list-disc'>
                            <li className='ml-8'>
                            <h2>This document is developed business analyst (BA) people.</h2>
                            </li>
                            <li className='ml-8'>
                            <h2>BRS acts as bridge between customer and technical people. </h2>
                            </li>
                            <li className='ml-8'>
                            <h2>BRS is formal document based on the requirement provided by client ( written ,verbally)</h2>
                            </li>
                        </ul>
                    </li>

            </ul>
            <table className='border-collapse border border-gray-400 ml-8 text-slate-700 text-sm leading-6 mb-4'>
                                    <thead>
                                        <tr>
                                            <th className='border border-gray-800'>Customer Requirement</th>
                                            <th className='border border-gray-800'>Business Document</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-gray-800">Dual Sim </td>
                                            <td className="border border-gray-800">2 Sim in a single device</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-800">Digital Watch </td>
                                            <td className="border border-gray-800">Time should be displayed in terms of unit</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-800">ATM Machine</td>
                                            <td className="border border-gray-800">User should withdraw money from any ATM</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-800">Project Related: Text box should not be blank. </td>
                                            <td className="border border-gray-800">Without filling this the next page should not be processed</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-800">Date box is customized </td>
                                            <td className="border border-gray-800">Means we can select date or can enter the manually there</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <ul className='text-slate-700 text-sm leading-6'>
                                <li className="ml-4 mb-4">
                                        <a href="#removing-the-shadow"
                                             class="group flex items-start py-1 hover:text-slate-900 dark:text-gray-800 dark:hover:text-gray-800 font-semibold">
                                                <svg width="3" height="24" viewBox="0 -9 3 24"
                                                    class="font-semibold mr-2 text-slate-800 overflow-visible group-hover:text-gray-800-600 dark:text-gray-800 dark:group-hover:text-gray-800">
                                                        <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                                        </path>
                                                </svg>
                                                Explain SRS? (System requirement Specification) SRS/ FRS/ PRD/CRS
                                         </a>
                                </li>
                                <li className="ml-4 mb-4">
                                    <ul className='list-disc'>
                                    <li className='ml-8'>
                                    <h2>SRS stands for System requirement Specification also called as FRS (Functional Requirement Specification) or PRD (Product Requirement Design). </h2>
                                    </li>
                                    <li className='ml-8'>
                                    <h2>This document is developed with respect to BRS. </h2>
                                    </li>
                                    <li className='ml-8'>
                                    <h2>SRS Document defines the functional requirement to be developed and system requirement to be developed.</h2>
                                    </li>
                                    <li className='ml-8'>
                                    <h2>SRS defined with respect to BRS that means every BRS having multiple SRS/FRS</h2>
                                    </li>
                                    <li className='ml-8'>
                                    <h2>SRS document is agreement between the developer and customer covering functional and non-functional requirement of software to be developed. </h2>
                                    </li>
                                    </ul>
                                </li>
                                
                </ul>

                <h1 className='font-semibold ml-8'>Q. what SRS consist? </h1>
                <p className='text-sm ml-8 mb-6'><blockquote>- "Obviously yes, without knowing SRS how it is possible to design test cases."</blockquote></p>
                <h1 className='font-semibold ml-8'>Q. what SRS consist? </h1>
                <p className='text-sm ml-14'>SRS consist of following </p>
                <ul className='ml-8 text-sm leading-7 list-disc mb-8'>
                    <li className='ml-8'>Functional Requirement </li>
                    <li className='ml-8'>Use case</li>
                    <li className='ml-8'>Functional flow diagram </li>
                    <li className='ml-8'>Snapshot</li>
                    <li className='ml-8'>High level design</li>
                </ul>
                <h1 className='font-semibold ml-8'>Q. Where does snapshot comes from? </h1>
                
                <ul className='ml-8 text-sm leading-7 list-disc mb-8'>
                    <li className='ml-8'>SRS document consist of map-shot also called as prototype. </li>
                    <li className='ml-8'>The main questions is there is no start of development process then how does snapshot </li>
                    <li className='ml-8'>BA people create snapshot of customer requirement for developer in order to clear understanding of customer requirement. </li>
                    <li className='ml-8'>Basically there are 2 ways to create snapshot </li>
                    <ol className='list-decimal ml-14'>
                        <li>By using HTML code </li>
                        <li>By using “idoc software (Idoc software is easy to use only drag and drop) </li>
                    </ol>
                    <li className='ml-8'>Generally BA people use idoc software to create snapshot it does not have any functionality</li>
                </ul>
                <h1 className='font-semibold ml-8'>Q. What is Use cases? </h1>
                <p className='text-sm ml-14 mb-4'>It defines a functionality in terms of input, output and process. </p>
                <h1 className='font-semibold ml-8'>Q. What is the time span of your project release? </h1>
                <p className='text-sm ml-14 mb-8 text-justify'>Release structure of an organization
                    For agile – Standard 1 Month but in real time 2 or 3 weeks.
                    For v Model / waterfall model/ spiral model: 3 Month.
                    1 release = 3 month.
                    It means quarterly release
                    1 year= Q1, Q2, Q3, Q4. 
                </p>
                <h1 className='font-semibold ml-8'>Q. Explain High level Design?</h1>
                <ul className='ml-8 text-sm leading-7 list-disc mb-8'>
                    <li className='ml-8'>It also known as “External Design” (Project architect) software designer. </li>
                    <li className='ml-8'>This document defines the hierarchy or structure of all possible functionality to be developed as main module. </li>
                    <li className='ml-8'>This is developed by project Architect or solution engineer or senior developer.</li>
                    <li className='ml-8'>Use just combines different modules to makes software example: a home consist of different modules kitchen, hall, bedroom etc.</li>
                    <li className='ml-8'>HLD is like functional flow diagram. HLD describe the relation between various modules and functions of the system. </li>
                </ul>
                <h1 className='font-semibold ml-8'>Q. Explain Low Level Design (LLD)? </h1>
                <ul className='ml-8 text-sm leading-7 list-disc mb-8'>
                    <li className='ml-8'>Low level design is also known as “Internal Design”. </li>
                    <li className='ml-8'>It defines the static logic of every sub modules.  </li>
                    <li className='ml-8'>LLD is like detailing the HLD</li>
                    <li className='ml-8'>Class diagram with all the methods, properties variables and realtion between classes come under LLD. </li>
                    <li className='ml-8'>HLD is like functional flow diagram. HLD describe the relation between various modules and functions of the system. </li>
                </ul>
                
        </div>
    );
}