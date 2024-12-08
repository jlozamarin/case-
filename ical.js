const timelineData = [
  {
    side: "left",
    header: "August - December 2025: Fall Semester",
    body: `Launch <b>Strategy 1: Campus Connect</b>.
    - <b>August:</b> Initiate university outreach and faculty partnerships. Launch stipends and editable templates.
    - <b>September:</b> Start the nationwide pop-up bus events, including vision board stations and branded merchandise distribution.
    - <b>October:</b> Launch Halloween-themed design competition. Promote using digital and campus channels.
    - <b>November:</b> Amplify UGC from pop-up events on social media using branded hashtags like <b>#AdobeExpressVisionBoard</b>.`
  },
  {
    side: "right",
    header: "January - May 2026: Spring Semester",
    body: `Continue <b>Strategy 1</b> and maintain <b>Strategy 2</b>.
    - <b>January:</b> Resume pop-up bus events on new campuses. Collect additional UGC and promote Adobe Express through campus ambassadors.
    - <b>February:</b> Expand academic partnerships and onboard new universities for Adobe Express curriculum integration.
    - <b>March & April:</b> Share UGC and testimonials from Spring pop-up events. Use digital ads to target non-participating universities.`
  },
  {
    side: "left",
    header: "June - August 2026: Summer Focus",
    body: `Begin <b>Strategy 3: Pathway to Success</b>.
    - <b>June:</b> Launch YouTube <b>Video Impact Ads</b> showcasing Adobe Express tutorials and testimonials.
    - <b>July:</b> Initiate influencer partnerships with nano- and micro-influencers to highlight Adobe Express's features for internships and creative projects.
    - <b>August:</b> Launch the <b>Professional Certification</b> program, focusing on LinkedIn visibility for certified students.`
  },
  {
    side: "right",
    header: "September - December 2026: Fall Semester Year 2",
    body: `Expand <b>Strategy 3</b> initiatives.
    - <b>September:</b> Continue YouTube ads and influencer partnerships. Target new students entering college.
    - <b>October:</b> Promote <b>Professional Certification</b> program through campus events and online campaigns.
    - <b>November:</b> Use testimonials from certified students to create a year-end social media push.
    - <b>December:</b> Wrap up Year 2 with performance reviews and optimization for future campaigns.`
  }
];

const timeline = document.getElementById("timeline");

timelineData.forEach(item => {
  const timelineItem = document.createElement("div");
  timelineItem.className = `timeline-item ${item.side}`;

  const header = document.createElement("div");
  header.className = "timeline-header";
  header.textContent = item.header;

  const body = document.createElement("div");
  body.className = "timeline-body";
  body.innerHTML = item.body;

  timelineItem.appendChild(header);
  timelineItem.appendChild(body);

  timeline.appendChild(timelineItem);
});
