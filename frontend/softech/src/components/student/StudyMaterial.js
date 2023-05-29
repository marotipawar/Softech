import { Link, Outlet } from "react-router-dom";

export default function StudyMaterial(){
    return (
        
        <div className="max-w-full space-x-4 flex justify-center mt-4">
            <div className="bg-gray-100 w-1/5 p-4">
                
            <div class="px-8">
    <h5 class="text-slate-900 font-semibold mb-4 text-sm leading-6 dark:text-slate-100">Study Materials</h5>
    <ul class="text-slate-700 text-sm leading-6">
    
        <li>
            <a href="#basic-usage" class="block py-1  font-medium text-gray-800 dark:text-gray-200">
                Manual Testing
            </a>
        </li>
        <li class="ml-4">
            <Link to="/home/studyMaterial/whtIsST" class="group flex items-start py-1 text-gray-800 dark:text-gray-200">
                <svg width="3" height="24" viewBox="0 -9 3 24"
                    class="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                    <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                    </path>
                </svg>What is Software Testing
            </Link>
        </li>
        <li class="ml-4">
            <a href="#adding-an-inner-shadow"
                class="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                <svg width="3" height="24" viewBox="0 -9 3 24"
                    class="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                    <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                    </path>
                </svg>Adding an inner shadow
            </a>
        </li>
        <li class="ml-4">
            <a href="#removing-the-shadow"
                class="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                <svg width="3" height="24" viewBox="0 -9 3 24"
                    class="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                    <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                    </path>
                </svg>Removing the shadow
            </a>
        </li>
        {/* <li> 
            <a href="#applying-conditionally"
                class="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">Applying
                conditionally
            </a>
        </li>
        <li class="ml-4">
            <a href="#hover-focus-and-other-states"
                class="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                <svg width="3" height="24" viewBox="0 -9 3 24"
                    class="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                    <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                    </path>
                </svg>Hover, focus, and other states
            </a>
        </li>
        <li class="ml-4">
            <a href="#breakpoints-and-media-queries"
                class="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                <svg width="3" height="24" viewBox="0 -9 3 24"
                    class="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                    <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                    </path>
                </svg>Breakpoints and media queries
            </a>
        </li>
        <li>
            <a href="#using-custom-values"
                class="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">Using
                custom values
            </a>
        </li>
        <li class="ml-4">
            <a href="#customizing-your-theme"
                class="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                <svg width="3" height="24" viewBox="0 -9 3 24"
                    class="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                    <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                    </path>
                </svg>Customizing your theme
            </a>
        </li>
        <li class="ml-4">
            <a href="#arbitrary-values"
                class="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                <svg width="3" height="24" viewBox="0 -9 3 24"
                    class="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                    <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                    </path>
                </svg>Arbitrary values
            </a>
    </li> */}
    </ul>
</div>
            </div>

        <div className="bg-gray-100 w-2/3 p-8 overflow-y-scroll  container-height" >
           <Outlet/>
            </div>
        </div>
    );
}