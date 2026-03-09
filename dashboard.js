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
    const createdAt = issueCard.dataset.created;

    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-description').innerText = description;
    document.getElementById('modal-assignee').innerText = `${assignee}`;
    document.getElementById('modal-openedBy').innerText = `Opened by ${assignee}`;
    document.getElementById('modal-updated-at').innerText = `${createdAt.slice(0, 10)}`;

    const showPriority = document.getElementById('modal-priority');
    showPriority.innerText = priority;

    showPriority.classList.toggle('bg-red-700', priority === 'high');
    showPriority.classList.toggle('bg-yellow-500', priority === 'medium');
    showPriority.classList.toggle('bg-green-500', priority === 'low');

    const showStatus = document.getElementById('modal-status');
    showStatus.innerText = `${status}`;

    showStatus.classList.toggle('bg-green-500', status === 'open')
    showStatus.classList.toggle('bg-red-500', status === 'closed') ;

    modal.showModal();
});


// Issues Display
function issuesDisplay(issues) {
    const issuesCount = document.getElementById('issues-count');
    issuesCount.innerText = `${issues.data.length} Issues`;
    const issuesContainer = document.getElementById('issues-container');
    issuesContainer.innerHTML = '';
    issues.data.forEach(issue => {

        const issueElement = document.createElement('div');
        issueElement.innerHTML = `
            <div class="hover-3d issue-card"
            data-title="${issue.title}"
            data-description="${issue.description}"
            data-assignee="${issue.assignee}"
            data-priority="${issue.priority}"
            data-status="${issue.status}"
            data-created="${issue.createdAt}"
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


