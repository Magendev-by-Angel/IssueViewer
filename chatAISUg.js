import Link from "next/link";

function Issue({ title, issueUrl }) {
    return (
        <div>
            <h2>{title}</h2>
            <Link href={issueUrl}>
                <a>View on GitHub</a>
            </Link>
        </div>
    );
}

import Link from "next/link";

function Issue({ title, issueUrl }) {
    const [status, setStatus] = useState(null);
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(
                `https://api.github.com/repos/${owner}/${repo}/issues/${issueNumber}`
            );
            const data = await res.json();
            setStatus(data.state);
        }
        fetchData();
    }, []);

    return (
        <div>
            <h2>{title}</h2>
            {status && <p>Status: {status}</p>}
            <Link href={issueUrl}>
                <a>View on GitHub</a>
            </Link>
        </div>
    );
}

// I have other questions, in the GitHub Issues Viewer program that I made, can I also send issues or update them without goin to the github link?

// Yes, you can use the GitHub API to create, update, and delete issues from your Next.js app. To do this, you'll need to authenticate with GitHub using an OAuth token. This token will allow you to make requests to the GitHub API on behalf of the user who granted you access.

// Once you have an OAuth token, you can use the fetch API to make requests to the GitHub API to create, update, and delete issues. For example, to create a new issue, you could make a POST request to the /repos/:owner/:repo/issues endpoint, like this:

const res = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/issues`,
    {
        method: "POST",
        body: JSON.stringify({
            title: "My new issue",
            body: "This is the body of my new issue",
        }),
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
);

//   To update an existing issue, you can make a PATCH request to the /repos/:owner/:repo/issues/:issue_number endpoint, like this:

const res0 = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/issues/${issueNumber}`,
    {
        method: "PATCH",
        body: JSON.stringify({
            state: "closed",
        }),
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
);

//   To delete an issue, you can make a DELETE request to the /repos/:owner/:repo/issues/:issue_number endpoint, like this:

const res1 = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/issues/${issueNumber}`,
    {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
);
