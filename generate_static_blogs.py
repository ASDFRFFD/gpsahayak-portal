import json
import os
import re

slug_map = {
    'YbmGK3RI9Q01jOC0y2Ay': 'blog-census-self-enumeration-2026.html',
    'ftj7BE8QtjVjJ1HANX9W': 'blog-attendance-boycott-2026.html',
    'gv38B0AwKTr9OvAAO7B8': 'blog-panchayat-sahayak-strike-2026.html',
    'nk8YKjv9IidHjlsp5cKa': 'blog-what-is-panchayat-sahayak.html'
}

# Load template
template_path = 'blog-panchayat-sahayak-salary-2026.html'
if not os.path.exists(template_path):
    print(f"Error: Template {template_path} not found.")
    exit(1)

with open(template_path, 'r', encoding='utf-8') as f:
    template_content = f.read()

# Load blogs dump
dump_path = 'blogs_dump.json'
if not os.path.exists(dump_path):
    print(f"Error: Blogs dump {dump_path} not found. Run fetch_blogs.py first.")
    exit(1)

with open(dump_path, 'r', encoding='utf-8') as f:
    blogs_data = json.load(f)

documents = blogs_data.get('documents', [])

for doc in documents:
    doc_name = doc.get('name', '')
    doc_id = doc_name.split('/')[-1]
    
    filename = slug_map.get(doc_id)
    if not filename:
        print(f"Warning: Document ID {doc_id} not mapped to a slug. Skipping.")
        continue
        
    fields = doc.get('fields', {})
    
    title = fields.get('title', {}).get('stringValue', '')
    desc = fields.get('desc', {}).get('stringValue', '')
    date_str = fields.get('date', {}).get('stringValue', '')
    read_time = fields.get('readTime', {}).get('stringValue', '5')
    category = fields.get('category', {}).get('stringValue', 'News')
    content = fields.get('content', {}).get('stringValue', '')
    
    # ISO Date representation for Article Schema (use default if not parseable)
    iso_date = "2026-03-28"
    if 'createdAt' in fields:
        timestamp_val = fields['createdAt'].get('timestampValue', '')
        if timestamp_val:
            iso_date = timestamp_val.split('T')[0]
            
    print(f"Generating static page for ID: {doc_id} -> {filename}")
    
    # Start with template copy
    page_html = template_content
    
    # 1. Replace page Title tag
    page_html = re.sub(
        r'<title>.*?</title>', 
        f'<title>{title} | Panchayat Sahayak Portal</title>', 
        page_html
    )
    
    # 2. Replace meta description
    page_html = re.sub(
        r'<meta name="description" content=".*?">', 
        f'<meta name="description" content="{desc}">', 
        page_html
    )
    
    # 3. Replace canonical and Open Graph URL
    page_html = page_html.replace(
        '<link rel="canonical" href="https://gpsahayak.in/blog-panchayat-sahayak-salary-2026.html">',
        f'<link rel="canonical" href="https://gpsahayak.in/{filename}">'
    )
    page_html = page_html.replace(
        '<meta property="og:url" content="https://gpsahayak.in/blog-panchayat-sahayak-salary-2026.html">',
        f'<meta property="og:url" content="https://gpsahayak.in/{filename}">'
    )
    
    # 4. Replace OG/Twitter titles and descriptions
    page_html = page_html.replace(
        '<meta property="og:title" content="पंचायत सहायक Salary 2026 — ₹6000 Manadey & PFMS Guide">',
        f'<meta property="og:title" content="{title}">'
    )
    page_html = page_html.replace(
        '<meta property="og:description" content="UP Panchayat Sahayak ki salary kitni hai, kab milti hai aur PFMS se kaise check kare — Hindi mein poori guide.">',
        f'<meta property="og:description" content="{desc}">'
    )
    page_html = page_html.replace(
        '<meta name="twitter:title" content="पंचायत सहायक Salary 2026 — ₹6000 Manadey & PFMS Guide">',
        f'<meta name="twitter:title" content="{title}">'
    )
    page_html = page_html.replace(
        '<meta name="twitter:description" content="UP Panchayat Sahayak ki salary kitni hai, kab milti hai aur PFMS se kaise check kare — Hindi mein poori guide.">',
        f'<meta name="twitter:description" content="{desc}">'
    )
    
    # 5. Remove FAQ schema if exists in template
    # (Since each post has different contents and we don't have structured FAQs for all)
    faq_schema_pattern = r'<!-- FAQ Schema for this post -->.*?<\/script>'
    page_html = re.sub(faq_schema_pattern, '', page_html, flags=re.DOTALL)
    
    # 6. Replace Article Schema
    article_schema_pattern = r'<!-- Article Schema -->.*?<\/script>'
    new_article_schema = f'''<!-- Article Schema -->
  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "{title}",
    "description": "{desc}",
    "author": {{"@type": "Organization", "name": "Panchayat Sahayak Portal"}},
    "publisher": {{"@type": "Organization", "name": "gpsahayak.in", "url": "https://gpsahayak.in"}},
    "datePublished": "{iso_date}",
    "dateModified": "{iso_date}",
    "url": "https://gpsahayak.in/{filename}",
    "inLanguage": "hi"
  }}
  </script>'''
    page_html = re.sub(article_schema_pattern, new_article_schema, page_html, flags=re.DOTALL)
    
    # 7. Replace Breadcrumb Schema
    breadcrumb_schema_pattern = r'<!-- BreadcrumbList Schema -->.*?<\/script>'
    new_breadcrumb_schema = f'''<!-- BreadcrumbList Schema -->
  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://gpsahayak.in/"}},
      {{"@type": "ListItem", "position": 2, "name": "Blog", "item": "https://gpsahayak.in/blog.html"}},
      {{"@type": "ListItem", "position": 3, "name": "{category}", "item": "https://gpsahayak.in/{filename}"}}
    ]
  }}
  </script>'''
    page_html = re.sub(breadcrumb_schema_pattern, new_breadcrumb_schema, page_html, flags=re.DOTALL)
    
    # 8. Replace Breadcrumb Navigation link text
    page_html = page_html.replace(
        '<a href="index.html">Home</a> → <a href="blog.html">Blog</a> → Salary Guide',
        f'<a href="index.html">Home</a> → <a href="blog.html">Blog</a> → {category}'
    )
    
    # 9. Replace Page main title H1
    page_html = page_html.replace(
        '<h1>पंचायत सहायक Salary 2026 — ₹6,000 Manadey, PFMS Payment & Kab Milti Hai</h1>',
        f'<h1>{title}</h1>'
    )
    
    # 10. Replace metadata
    old_meta = '''<div class="article-meta">
          <span>📅 28 March 2025</span>
          <span>⏱️ 5 min read</span>
          <span>✍️ gpsahayak.in Team</span>
          <span>🏷️ Salary Guide</span>
        </div>'''
    new_meta = f'''<div class="article-meta">
          <span>📅 {date_str}</span>
          <span>⏱️ {read_time} min read</span>
          <span>✍️ gpsahayak.in Team</span>
          <span>🏷️ {category}</span>
        </div>'''
    page_html = page_html.replace(old_meta, new_meta)
    # Just in case date was formatted slightly differently (e.g. 28 March 2026 vs 2025)
    page_html = re.sub(
        r'<div class="article-meta">.*?<\/div>',
        new_meta,
        page_html,
        flags=re.DOTALL
    )
    
    # 11. Replace Article content
    # Find start after </header> and before <!-- Related Articles --> or <!-- FAQ Section -->
    header_end_idx = page_html.find('</header>')
    if header_end_idx == -1:
        print(f"Error: </header> not found in template for {filename}")
        continue
    
    # We should search for related links start
    related_start_idx = page_html.find('<!-- Related Articles -->')
    if related_start_idx == -1:
        # Fallback to FAQ section if related articles doesn't exist
        related_start_idx = page_html.find('<section class="faq-section">')
        
    if related_start_idx == -1:
        print(f"Error: Content end boundary not found in template for {filename}")
        continue
        
    # We want to replace the segment between the article header and the footer/related links
    # In the template, between </header> and <!-- Related Articles --> there is some content.
    # We slice out the old content and insert the new dynamic content.
    
    # Wait, we want to slice it starting *after* the </header> tag of the article header.
    # Let's inspect where the article header ends.
    # In template:
    # </header> (of the article header) is around line 423.
    # The template has:
    #   <main class="page article-layout">
    #     <div class="article-body">
    #       <header class="article-header">
    #         ...
    #       </header>
    #       [CONTENT WE WANT TO REPLACE]
    #       <!-- FAQ Section --> / <!-- Related Articles -->
    #       ...
    
    # To find the exact index after `</header>` of the article header, we should do:
    article_header_end_pattern = r'</header>\s*(?=<div class="info-box|<p>|<h2>|<div class="article-body">|\s*<div class="info-box blue")'
    # Wait, the easiest is to find the index of the first character after `</header>` that follows `<div class="article-meta">...</div>`.
    # Let's find '</header>' after the `<div class="article-meta">`
    meta_idx = page_html.find('class="article-meta"')
    header_close_idx = page_html.find('</header>', meta_idx)
    if header_close_idx == -1:
        print(f"Error: close of article header </header> not found for {filename}")
        continue
        
    content_start_idx = header_close_idx + len('</header>')
    
    # Build final HTML page
    # Clean Quill output styles (e.g. background-color) if needed or wrap it in a div
    wrapped_content = f'\n      <div class="dynamic-content" style="margin-top: 25px;">\n        {content}\n      </div>\n      '
    
    page_html = page_html[:content_start_idx] + wrapped_content + page_html[related_start_idx:]
    
    # Save the file
    with open(filename, 'w', encoding='utf-8') as f_out:
        f_out.write(page_html)
        
print("All static blog pages generated successfully!")
