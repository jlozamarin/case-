const timelineData = [
    {
      header: "Fall 2025",
      body: "Launch Strategy 1: Campus Connect. Begin academic alliances, pop-up events, and the Halloween competition. Implement Strategy 2: UGC Amplification, social ads, and email campaigns."
    },
    {
      header: "Spring 2026",
      body: "Continue Strategy 1 with expanded partnerships and pop-up events. Launch a Spring competition. Maintain Strategy 2 with fresh UGC, expanded ads, and professional tips in email marketing."
    },
    {
      header: "Summer 2026",
      body: "Launch Strategy 3: Pathway to Success. Begin YouTube ads, influencer collaborations, and the Professional Certification program."
    },
    {
      header: "Fall 2026",
      body: "Expand Strategy 3 with influencer partnerships and certification promotions. Continue YouTube ads targeting new students."
    }
  ];
  
  const timeline = document.getElementById("timeline");
  
  timelineData.forEach(item => {
    const timelineItem = document.createElement("div");
    timelineItem.className = "timeline-item";
  
    const header = document.createElement("div");
    header.className = "timeline-header";
    header.textContent = item.header;
  
    const body = document.createElement("div");
    body.className = "timeline-body";
    body.textContent = item.body;
  
    timelineItem.appendChild(header);
    timelineItem.appendChild(body);
  
    timeline.appendChild(timelineItem);
  });
  