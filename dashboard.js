const url = 'https://phi-lab-server.vercel.app/api/v1/lab/issues ';

fetch(url)
    .then(res => res.json())
    .then(data => {
        issuesDisplay(data);
    })


function issuesDisplay(issues) {

    const issuesCount = document.getElementById('issues-count');
    issuesCount.innerText = `${issues.data.length} Issues`;

    const issuesContainer = document.getElementById('issues-container');
    issuesContainer.innerHTML = '';
    issues.data.forEach(issue => {
        console.log(issue);

        const issueElement = document.createElement('div');
        issueElement.innerHTML = `
            <div class="hover-3d">

            <div class="card shadow-lg h-90 border-t-4 border-[#14b8a6] bg-white">

                <div class="card-body">

                    <div class="flex items-center justify-between">
                        ${issue.status === 'open' ? `<img src="assets/Open-Status.png">` : `<img src="assets/Closed-Status.png">`}

                        <div class="badge bg-[#d4a373] text-white font-semibold ${issue.priority === 'high' ? 'bg-red-700' : issue.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'}">
                            ${issue.priority}
                        </div>
                    </div>

                    <h2 class="card-title text-[#0f172a] font-semibold">
                        ${issue.title}
                    </h2>

                    <p class="text-[#64748b]">
                        ${issue.description}
                    </p>

                    <div class="card-actions">

                        <div class="badge badge-outline border-[#d4a373] text-[#d4a373] font-semibold">
                            ${issue.labels[0]}
                        </div>

                        <div class="badge badge-outline border-[#14b8a6] text-[#14b8a6] font-semibold">
                            ${issue.labels[1]}
                        </div>

                    </div>

                </div>

                <hr class="opacity-20" />

                <div class="p-5 text-[#334155] font-medium">
                    <p>#1 ${issue.author}</p>
                    <p>${issue.createdAt.slice(0, 10)}</p>
                </div>

            </div>

            <!-- keep 3D helper divs -->
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>

        </div>
        `;
        issuesContainer.append(issueElement);

    })
}


