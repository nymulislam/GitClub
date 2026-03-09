const url = 'https://phi-lab-server.vercel.app/api/v1/lab/issues ';

fetch(url)
    .then(res => res.json())
    .then(data => {
        issuesDisplay(data);
    })


// Modal Opening
const modal = document.getElementById('my_modal_5');
document.addEventListener('click', (e) => {
    const issueCard = e.target.closest('.issue-card');
    if (!issueCard) return;

    const title = issueCard.dataset.title;
    const description = issueCard.dataset.description;
    const assignee = issueCard.dataset.assignee;
    const priority = issueCard.dataset.priority;
    const status = issueCard.dataset.status;
    const labels = issueCard.dataset.labels.split(', ');

    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-description').innerText = description;
    document.getElementById('modal-assignee').innerText = `${assignee}`;
    document.getElementById('modal-openedBy').innerText = `Opened by ${assignee}`;

    const showPriority = document.getElementById('modal-priority');
    showPriority.innerText = priority;
    priority === 'high' ? showPriority.classList.add('bg-red-700') : priority === 'medium' ? showPriority.classList.add('bg-yellow-500') : showPriority.classList.add('bg-green-500');

    document.getElementById('modal-status').innerText = `${status}`;

    console.log(title, description, assignee, priority, status, labels);

    modal.showModal();
});

function issuesDisplay(issues) {
    const issuesCount = document.getElementById('issues-count');
    issuesCount.innerText = `${issues.data.length} Issues`;
    const issuesContainer = document.getElementById('issues-container');
    issuesContainer.innerHTML = '';
    issues.data.forEach(issue => {

        // console.log(issue.labels);
        const issueElement = document.createElement('div');
        issueElement.innerHTML = `
            <div class="hover-3d issue-card"
            data-title="${issue.title}"
            data-description="${issue.description}"
            data-assignee="${issue.assignee}"
            data-priority="${issue.priority}"
            data-status="${issue.status}"
            data-labels="${issue.labels.join(', ')}"
            >

            <div class="card shadow-lg h-90 border-t-4 ${issue.status === 'open' ? 'border-[#14b8a6]' : 'border-purple-500'} bg-white">

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
                    ${issue.labels.length === 1 ? `<div class="badge badge-outline border-[#d4a373] text-[#d4a373] font-semibold">
                            ${issue.labels[0] === "bug" ? '<i class="fa-solid fa-bug"></i> ' : '<i class="fa-brands fa-strava"></i>'}
                            ${issue.labels[0]}
                        </div>` : `
                        <div class="badge badge-outline border-[#d4a373] text-[#d4a373] font-semibold">
                            ${issue.labels[0] === "bug" ? '<i class="fa-solid fa-bug"></i> ' : '<i class="fa-brands fa-strava"></i>'} 
                            ${issue.labels[0]}
                        </div>
                        <div class="badge badge-outline border-[#14b8a6] text-[#14b8a6] font-semibold"
                        >
                        ${issue.labels[1] === "bug" ? '<i class="fa-solid fa-bug"></i> ' : '<i class="fa-brands fa-strava"></i>'}
                             ${issue.labels[1]}
                        </div>`}
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


