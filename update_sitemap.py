import os
from datetime import datetime

base_url = "https://gpsahayak.in"

# Read all html files
html_files = [f for f in os.listdir('.') if f.endswith('.html')]

# We'll assign different priorities based on importance
priorities = {
    'index.html': '1.0',
    'blog.html': '0.9',
    'blog-panchayat-sahayak-salary-2026.html': '0.9',
    'gram-panchayat-yojana-list.html': '0.9',
    'about.html': '0.5',
    'contact.html': '0.5',
    'privacy.html': '0.4',
    'disclaimer.html': '0.4',
}

xml_content = '<?xml version="1.0" encoding="UTF-8"?>\n'
xml_content += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

for f in html_files:
    if f.startswith('admin-'):
        continue
    
    loc = f"{base_url}/" if f == 'index.html' else f"{base_url}/{f}"
    lastmod = datetime.now().strftime('%Y-%m-%d')
    priority = priorities.get(f, '0.8')
    changefreq = 'daily' if priority in ['1.0', '0.9'] else 'weekly'
    
    xml_content += f'  <url>\n'
    xml_content += f'    <loc>{loc}</loc>\n'
    xml_content += f'    <lastmod>{lastmod}</lastmod>\n'
    xml_content += f'    <changefreq>{changefreq}</changefreq>\n'
    xml_content += f'    <priority>{priority}</priority>\n'
    xml_content += f'  </url>\n'

xml_content += '</urlset>\n'

with open('sitemap.xml', 'w', encoding='utf-8') as sitemap:
    sitemap.write(xml_content)

print(f"Sitemap updated with {len([f for f in html_files if not f.startswith('admin-')])} URLs.")
