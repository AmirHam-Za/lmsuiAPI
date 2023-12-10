<template>
    <div class="container px-5 mb-5 mx-auto">
        <div class="w-full">
            <div class="lg:flex mt-10">
                <div class="lg:w-3/12">
                    <div class="block text-sm">
                        <input
                            class="mt-1 px-3 py-2 text-slate-600 relative rounded text-sm border border-slate-300 outline-none  w-full"
                            placeholder="Search Course,title,content.... " 
                        />
                    </div>
                </div>
                <div class="lg:w-2/12">
                    <div class="block text-sm lg:ml-4 mt-5 lg:mt-0 md:mt-0">
                        <select class="mt-1 px-3 py-2  text-slate-600 relative bg-white rounded text-sm border border-slate-300 outline-none  w-full">
                            <option>Search by Category</option>
                            <option>Primary Care</option>
                            <option>Myelodysplastic Syndromes (MDS)</option>
                            <option>Lymphoma</option>
                            <option>Leukemi</option>
                        </select>
                    </div>
                </div>
                <div class="lg:w-2/12">
                    <div class="block text-sm lg:ml-4 mt-5 lg:mt-0 md:mt-0">
                        <select class="mt-1 px-3 py-2 text-slate-600 relative bg-white rounded text-sm border border-slate-300 outline-none w-full">
                            <option>Search by Participant Type</option>
                            <option>Physician</option>
                            <option>Nurse</option>
                            <option>Social Worker</option>
                            <option>Participant</option>
                        </select>
                    </div>
                </div>
                <div class="w-full lg:w-4/12">
                    <div class="block text-sm lg:ml-4 mt-5 lg:mt-0 md:mt-0">
                        <button class="bg-primary-250 text-white text-lg h-10 px-6 w-full lg:w-52 py-2 rounded">Search</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>