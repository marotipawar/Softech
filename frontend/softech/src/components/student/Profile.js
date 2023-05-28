import { useState } from "react";
import { Link } from "react-router-dom";
export default function Profile(){

  const [firstName, setFirstName]=useState('');
  const [lastName, setLastName]=useState('');
  const [gender, setGender]=useState('');
  const [dd, setDd]=useState('');
  const [mm, setMm]=useState('');
  const [yy, setYy]=useState('');
  const [mobile, setMobile]=useState('');
  const [country, setCountry]=useState('');
  const [city, setCity]=useState('');
  const[address, setAddress]= useState('');
  const [stateName, setStateName]=useState('');
  
  const [pincode, setPincode]=useState(0);

  const handleFirstName = (e)=>{setFirstName(e.target.value);}
  const handleLastName = (e)=>{setLastName(e.target.value);}
  const handleGender = (e)=>{setGender(e.target.value);}
  const handleDD = (e)=>{setDd(e.target.value);}
  const handleMM = (e)=>{setMm(e.target.value);}
  const handleYY = (e)=>{setYy(e.target.value);}
  const handleMobile = (e)=>{setMobile(e.target.value);}
  const handleCountry = (e)=>{setCountry(e.target.value);}
  const handleAddress = (e)=>{setAddress(e.target.value);}
  const handleCity = (e)=>{setCity(e.target.value);}
  const handleState = (e)=>{setStateName(e.target.value);}
  const handleZipCode = (e)=>{setPincode(e.target.value);}

  const handleProfile = (e)=>{
    e.preventDefault();
    console.log(firstName);
    console.log(lastName);
    console.log(gender);
    console.log(dd+':'+mm+':'+yy);
    console.log(mobile);
    console.log(country);
    console.log(address);
    console.log(city);
    console.log(stateName);
    console.log(pincode);
  }
    return(
<div className="max-w-md mx-auto bg-gray-100 p-4 mt-4 drop-shadow-md">
    <form>
    <div className="">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

          <div className="mt-4 grid grid-cols-1 gap-x-4 gap-y-1 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  autoComplete="given-name"
                  onChange={handleFirstName}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  onChange={handleLastName}
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="mobile" className="block text-sm font-medium leading-6 text-gray-900">
                Gender
              </label>
              <div className="mt-2 space-x-4">
                <input
                  id="gender"
                  name="gender"
                  type="radio"
                  onChange={handleGender}
                  autoComplete="gender"
                  value="male"
                /> Male 
                 <input
                  id="gender"
                  name="gender"
                  type="radio"
                  onChange={handleGender}
                  value="female"
                  autoComplete="gender"
                /> Female
              </div>
            </div>
            <div className="sm:col-span-3">
            <label htmlFor="first-name" className="text-sm font-medium leading-6 text-gray-900">
                DOB
              </label>
             <div className="flex items-center justify-center space-x-2">
             <div className="mt-2">
                <input
                  type="text"
                  name="dd"
                  id="dd"
                  onChange={handleDD}
                  autoComplete="given-dd"
                  placeholder="DD"
                  className="text-center w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mt-2">
                <input
                  type="text"
                  name="mm"
                  id="mm"
                  onChange={handleMM}
                  autoComplete="given-mm"
                  placeholder="MM"
                  className="text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mt-2">
                <input
                  type="text"
                  name="yy"
                  id="yy"
                  onChange={handleYY}
                  autoComplete="given-yy"
                  placeholder="YYYY"
                  className=" text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
             </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="mobile" className="block text-sm font-medium leading-6 text-gray-900">
                Mobile
              </label>
              <div className="mt-2">
                <input
                  id="mobile"
                  name="mobile"
                  type="mobile"
                  onChange={handleMobile}
                  autoComplete="mobile"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Country
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  value={country}
                  onChange={handleCountry}
                  autoComplete="countryName"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="India">India</option>
                  <option value="United State">United States</option>
                  <option value="Canada">Canada</option>
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Street address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  onChange={handleAddress}
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                City
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  onChange={handleCity}
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                State / Province
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="region"
                  onChange={handleState}
                  id="region"
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  onChange={handleZipCode}
                  id="postal-code"
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-end gap-x-6">
        <Link to="/home/studentHome" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </Link>
        <button
          type="submit"
          className="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={handleProfile}
        >
          Save
        </button>
      </div>
    </form>


</div>
    );
}