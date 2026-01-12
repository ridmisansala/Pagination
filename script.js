const itemsPerPage = 5;
        let currentPage = 1;
        const totalPages = Math.ceil(projects.length / itemsPerPage);


        function renderPage(page) {
            container.innerHTML = "";
            const start = (page - 1) * itemsPerPage;
            const end = start + itemsPerPage;
            const pageItems = projects.slice(start, end);

            let html = "";
            pageItems.forEach((project, index) => {
                html += `
                    <div class="border rounded-lg shadow-sm p-6 max-w-3xl mb-4 ">
                        <div class="flex items-center justify-between mb-3">
                            <h2 class="text-xl font-bold text-white">${start + index + 1}. ${project.title || "Untitled Project"}</h2>
                            <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition" onclick="preview(${project.id});">
                                View
                            </button>
                        </div>
                        <div class="space-y-2 text-gray-700">
                            <p class="text-grey-800">
                            <span class="font-semibold text-grey-800">Related Fields:</span>
                            ${project.categories && project.categories.length > 0
                    ? project.categories.join(", ")
                    : "N/A"}
</p>

                            <p class="text-grey-800"><span class="font-semibold text-grey-800">Price:</span> ${project.price || "Free"}</p>
                           
                        </div>
                    </div>
                `;
            });


            html += `
                <div class="flex justify-center gap-4 mt-4">
                    <button id="prevPage" class="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 text-black" ${page === 1 ? "disabled" : ""}>Prev</button>
                    <span class="text-gray-700">Page ${page} of ${totalPages}</span>
                    <button id="nextPage" class="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 text-black" ${page === totalPages ? "disabled" : ""}>Next</button>
                </div>
            `;

            container.innerHTML = html;


            document.getElementById("prevPage")?.addEventListener("click", () => {
                if (currentPage > 1) {
                    currentPage--;
                    renderPage(currentPage);
                }
            });
            document.getElementById("nextPage")?.addEventListener("click", () => {
                if (currentPage < totalPages) {
                    currentPage++;
                    renderPage(currentPage);
                }
            });
        }
        renderPage(currentPage);