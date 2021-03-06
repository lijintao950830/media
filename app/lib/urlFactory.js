let protooPort = 4443;

if (window.location.hostname === 'test.mediasoup.org')
	protooPort = 4444;

export function getProtooUrl({ roomId, peerId, forceH264, forceVP9 })
{
	console.log("此处的roomId"+roomId);
	console.log("此处的peerId"+peerId);
	const hostname = "192.168.0.101";
	let url = `wss://${hostname}:${protooPort}/?roomId=${roomId}&peerId=${peerId}`;
	if (forceH264)
		url = `${url}&forceH264=true`;
	else if (forceVP9)
		url = `${url}&forceVP9=true`;

	return url;
}

