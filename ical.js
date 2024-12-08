const timelineData = [
    {
      header: "August - December 2025: Fall Semester",
      body: `Launch Strategy 1: Campus Connect.
      - August: Initiate university outreach and faculty partnerships. Launch stipends and editable templates.
      - September: Start the nationwide pop-up bus events, including vision board stations and branded merchandise distribution.
      - October: Launch Halloween-themed design competition. Promote using digital and campus channels.
      - November: Amplify UGC from pop-up events on social media using branded hashtags like #AdobeExpressVisionBoard.`
    },
    {
      header: "January - May 2026: Spring Semester",
      body: `Continue Strategy 1 and maintain Strategy 2.
      - January: Resume pop-up bus events on new campuses. Collect additional UGC and promote Adobe Express through campus ambassadors.
      - February: Expand academic partnerships and onboard new universities for Adobe Express curriculum integration.
      - March: Launch Spring-themed design competition and promote through Instagram, TikTok, and email campaigns.
      - April: Share UGC and testimonials from Spring pop-up events. Use digital ads to target non-participating universities.`
    },
    {
      header: "June - August 2026: Summer Focus",
      body: `Begin Strategy 3: Pathway to Success.
      - June: Launch YouTube Video Impact Ads showcasing Adobe Express tutorials and testimonials. 
      - July: Initiate influencer partnerships with nano- and micro-influencers to highlight Adobe Express's features for internships and creative projects.
      - August: Launch the Professional Certification program, focusing on LinkedIn visibility for certified students.`
    },
    {
      header: "September - December 2026: Fall Semester Year 2",
      body: `Expand Strategy 3 initiatives.
      - September: Continue YouTube ads and influencer partnerships. Target new students entering college.
      - October: Promote Professional Certification program through campus events and online campaigns.
      - November: Use testimonials from certified students to create a year-end social media push.
      - December: Wrap up Year 2 with performance reviews and optimization for future campaigns.`
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
  
  