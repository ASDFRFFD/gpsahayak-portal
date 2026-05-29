"""
Fix script: Repairs the broken section in index.html where FAQ got injected
inside the forms/quick-actions section.
"""

filepath = r'd:\CODING\coding 2\coding 2\Xfile\index.html'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# The broken part starts at the corrupted div class attribute
# We need to find where "जन्म / मृत्यु प्रमाण पत्र" div got broken and fix the structure

# Step 1: Fix the broken form-item for "जन्म / मृत्यु प्रमाण पत्र"
# The corrupt line looks like: <div class=  <section class="faq-section"...
# We need to remove everything from that broken injection up to </section>   </div>

broken_start = '<div class=  <section class="faq-section"'
broken_end = '</section>   </div>'

idx_start = content.find(broken_start)
idx_end = content.find(broken_end)

if idx_start == -1 or idx_end == -1:
    print("Could not find broken section! Check manually.")
    print(f"broken_start found: {idx_start != -1}")
    print(f"broken_end found: {idx_end != -1}")
else:
    # Replace the entire broken injection with the correct form-item HTML
    correct_replacement = '''<div class="meta" style="color:var(--muted)">PDF</div>
          </div>
          <div><button class="btn" onclick="openForm(this)">Open</button></div>
        </div>

        <div class="form-item">
          <div>
            <div class="name">पंचायत सहायक अनुबंध</div>
            <div class="meta" style="color:var(--muted)">PDF</div>
          </div>
          <div><button class="btn" onclick="openForm(this)">Open</button></div>
        </div>

      </div>
    </section>
    <section id="quick-actions" class="panel" aria-labelledby="qa-title">
      <div class="section-head">
        <h3 id="qa-title" style="margin:0">महत्वपूर्ण लिंक (Quick Actions)</h3>
        <span style="font-size:12px; color:var(--muted)">Direct Access</span>
      </div>

      <div class="action-grid-8">

        <a href="gram-panchayat-yojana-list.html" class="action-box" style="text-decoration:none;">
          <div class="ab-icon" style="background:#e0f2fe; color:#0284c7; font-size:22px;">📃</div>
          <div class="ab-text">सभी योजनाओं की लिस्ट</div>
        </a>

        <a href="panchayat-sahayak-salary-status.html" class="action-box" style="text-decoration:none;">
          <div class="ab-icon" style="background:#dcfce7; color:#16a34a; font-size:22px;">✔️</div>
          <div class="ab-text">आवेदनों की स्थिति</div>
        </a>

        <a href="panchayat-sahayak-all-portals.html" class="action-box" style="text-decoration:none;">
          <div class="ab-icon" style="background:#e0f0ff; color:#1e3c72; font-size:22px;">🌐</div>
          <div class="ab-text">सभी सरकारी पोर्टल</div>
        </a>

        <div class="action-box">
          <div class="ab-icon" style="background:#fef3c7; color:#b45309; font-size:22px;">💻</div>
          <div class="ab-text">ई-ग्राम स्वराज एंट्री</div>
        </div>

        <div class="action-box">
          <div class="ab-icon" style="background:#f0fdf4; color:#15803d; font-size:22px;">📊</div>
          <div class="ab-text">ग्राम पंचायत कार्य रिपोर्ट</div>
        </div>'''

    # Replace from broken start to end of broken section (inclusive)
    end_position = idx_end + len(broken_end)
    content = content[:idx_start] + correct_replacement + content[end_position:]
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Fixed successfully!")
    print(f"Replaced chars {idx_start} to {end_position}")

