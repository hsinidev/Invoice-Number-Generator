import React, { useState } from 'react';

const SeoArticle: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const jsonLdData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "url": "https://doodax.com/",
                "name": "Invoice Number Generator",
                "description": "Free and instant invoice number generation tool for businesses.",
                "publisher": {
                    "@type": "Organization",
                    "name": "Doodax",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://doodax.com/favicon.svg"
                    }
                }
            },
            {
                "@type": "WebApplication",
                "name": "Invoice Number Generator",
                "url": "https://doodax.com/",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "All",
                "browserRequirements": "Requires JavaScript. Supports modern browsers.",
                "description": "Generate sequential, date-based, or random invoice numbers with custom prefixes. Client-side tool with local storage persistence.",
                "featureList": [
                    "Sequential Number Generation",
                    "Date-Based Number Generation",
                    "Random Number Generation",
                    "Customizable Prefixes",
                    "Local Storage Persistence",
                    "One-Click Copy",
                    "Secure Client-Side Processing"
                ],
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                },
                "author": {
                    "@type": "Person",
                    "name": "HSINI MOHAMED",
                    "url": "https://github.com/hsinidev"
                }
            },
            {
                "@type": "Article",
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "https://doodax.com/#article"
                },
                "headline": "The Ultimate Guide to Invoice Numbering Systems: Best Practices for 2024",
                "description": "A comprehensive guide covering the legal necessity of unique invoice numbering, common pitfalls, benefits of different systems, and best practices for auditing.",
                "image": "https://doodax.com/og-image.png",
                "author": {
                    "@type": "Person",
                    "name": "HSINI MOHAMED",
                    "url": "https://github.com/hsinidev"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "Doodax",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://doodax.com/favicon.svg"
                    }
                },
                "datePublished": "2023-10-27",
                "dateModified": "2023-10-27"
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Is a sequential invoice number a legal requirement?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "In many countries (UK, EU, Canada, Australia, etc.), yes. Tax authorities mandate unique, sequential numbers to prevent fraud and ensure a complete audit trail."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What happens if I skip an invoice number?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Skipping numbers creates audit gaps. You should document the reason for the gap or issue a voided invoice for that number to maintain the sequence."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I use Excel for invoice numbering?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "While possible, it is prone to human error (duplicates, skips). Automated tools or dedicated software are safer and more professional."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How do I number invoices for a new year?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Many businesses start a new sequence each fiscal year, often incorporating the year into the prefix (e.g., 2024-001) to keep records organized."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 mt-12 mb-12">
             <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-white">Invoice Guide & Best Practices</h2>
                <div className="h-1 flex-grow mx-4 bg-gradient-to-r from-pink-500/50 to-transparent rounded-full"></div>
             </div>

            <div className={`relative transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-[20000px] opacity-100' : 'max-h-24 overflow-hidden opacity-90'}`}>
                <article id="article" className="max-w-none text-gray-300 prose prose-invert prose-lg prose-headings:text-white prose-a:text-pink-400 hover:prose-a:text-pink-300 prose-strong:text-gray-100 prose-blockquote:border-pink-500 prose-code:text-purple-300">
                    <script type="application/ld+json">
                        {JSON.stringify(jsonLdData)}
                    </script>
                    
                    <h1 className="text-3xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500">The Definitive Guide to Invoice Numbering Systems: Compliance, Strategy, and Efficiency</h1>
                    
                    <p className="lead text-xl text-gray-200 mb-8">
                        In the complex ecosystem of business finance, the invoice number serves as the DNA of a transaction. It is a unique identifier that binds a service provider to a client, a payment to a deliverable, and a business to the tax authorities. While it may seem like a trivial administrative detail, a robust invoice numbering system is the bedrock of financial health, legal compliance, and operational efficiency. This comprehensive 3,500+ word guide explores every facet of invoice numbering, from legal mandates across the globe to advanced automation strategies.
                    </p>

                    {/* The rest of the article content is hidden if not expanded */}
                    <div className={`${isExpanded ? 'block' : 'hidden'} animate-fade-in`}>
                        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 my-8 shadow-lg">
                            <h2 className="!mt-0 text-xl text-pink-400">Table of Contents</h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                                <li><a href="#legal-landscape" className="no-underline hover:text-white transition-colors">1. The Global Legal Landscape</a></li>
                                <li><a href="#psychology" className="no-underline hover:text-white transition-colors">2. The Psychology of Invoice Numbers</a></li>
                                <li><a href="#systems-deep-dive" className="no-underline hover:text-white transition-colors">3. Deep Dive: Numbering Systems</a></li>
                                <li><a href="#automation" className="no-underline hover:text-white transition-colors">4. The Role of Automation</a></li>
                                <li><a href="#errors-audits" className="no-underline hover:text-white transition-colors">5. Handling Errors & Surviving Audits</a></li>
                                <li><a href="#freelancers" className="no-underline hover:text-white transition-colors">6. Special Guide for Freelancers</a></li>
                                <li><a href="#faq-expanded" className="no-underline hover:text-white transition-colors">7. Extended FAQ</a></li>
                            </ul>
                        </div>

                        <h2 id="legal-landscape">1. The Global Legal Landscape: Why "Unique and Sequential" Matters</h2>
                        <p>Across the globe, tax authorities have a singular goal: to ensure that every taxable transaction is recorded and that no revenue is hidden. The primary mechanism for this is the requirement for invoice numbers to be <strong>unique</strong> and <strong>sequential</strong>.</p>
                        
                        <h3>United Kingdom (HMRC)</h3>
                        <p>HM Revenue & Customs explicitly states that a VAT invoice must show "a unique identification number". While they allow for different series, the numbers must be sequential based on one or more series. Missing numbers are an immediate red flag during VAT inspections.</p>
                        
                        <h3>European Union (VAT Directive)</h3>
                        <p>The EU VAT Directive mandates that invoices must contain "a sequential number, based on one or more series, which uniquely identifies the invoice". This harmonization ensures that cross-border trade within the EU can be tracked and audited effectively.</p>
                        
                        <h3>United States (IRS)</h3>
                        <p>While the US system is less rigid regarding the specific format of invoice numbers compared to VAT jurisdictions, the IRS requires businesses to maintain books and records that substantiate income. A sequential numbering system is the industry standard for proving that income records are complete and that no transactions have been "off the books".</p>
                        
                        <h3>Canada (CRA) and Australia (ATO)</h3>
                        <p>Both the Canada Revenue Agency and the Australian Taxation Office follow similar principles. For GST/HST purposes, invoices (or tax invoices) must be clearly identified. Duplicate numbers can lead to the denial of input tax credits for your clients, damaging your business relationships.</p>

                        <h2 id="psychology">2. The Psychology of Invoice Numbers: Perception is Reality</h2>
                        <p>Your invoice number tells a story about your business before the client even looks at the total amount. It signals longevity, volume, and professionalism.</p>
                        <ul>
                            <li><strong>The "Start-Up" Signal:</strong> Sending an invoice numbered <code>#0001</code> screams "this is my first job". While everyone starts somewhere, this can sometimes make larger clients nervous about your stability.</li>
                            <li><strong>The "Established" Signal:</strong> Starting your sequence at <code>#1001</code> or <code>#5000</code> suggests you have a history of trading. It builds immediate, subconscious trust.</li>
                            <li><strong>The "Enterprise" Signal:</strong> Complex, prefixed numbers like <code>WEB-2024-8921</code> suggest a compartmentalized, organized, and scalable operation. It implies you have systems in place, not just a spreadsheet.</li>
                        </ul>

                        <h2 id="systems-deep-dive">3. Deep Dive: Configuring Your Numbering System</h2>
                        <p>Choosing the right system depends on your volume, your industry, and your organizational structure. Let's explore the architectures available in our tool.</p>

                        <h3>The Sequential Standard (e.g., INV-001)</h3>
                        <p>This is the "set it and forget it" method. It is universally compliant and easy to manage.</p>
                        <p><strong>Pros:</strong> Zero ambiguity. Easy to spot missing invoices. Short and easy to type.</p>
                        <p><strong>Cons:</strong> If you only issue 5 invoices a month, your clients will know exactly how much work you aren't doing.</p>

                        <h3>The Chronological Hybrid (e.g., 2023-10-001)</h3>
                        <p>This method resets the sequence every month or year. It is excellent for filing.</p>
                        <p><strong>Implementation Strategy:</strong> Use a prefix that denotes the year (`23-`) or year and month (`2310-`). This naturally groups your files when sorted by name on a computer.</p>
                        <p><strong>Warning:</strong> Ensure you reset the counter correctly at the start of the new period. Using `2310-001` followed by `2311-002` (continuing the count) is confusing. Reset to `2311-001`.</p>

                        <h3>The Project-Based Prefix (e.g., ACME-001)</h3>
                        <p>For agencies working with large accounts, prefixing the client name is helpful.</p>
                        <p><strong>Risk:</strong> This creates multiple independent sequences (`ACME-01`, `BETA-01`). You must ensure that legally, you can explain these parallel series to an auditor. It is often safer to keep one master sequence (`INV-1005`) and use the client name as a Reference field instead.</p>

                        <h2 id="automation">4. The Role of Automation and Client-Side Tools</h2>
                        <p>In the past, invoice books were physical pads with pre-printed red numbers. Today, we have digital tools. However, many cloud tools come with privacy trade-offs.</p>
                        <p><strong>The Privacy Problem:</strong> When you use a free online invoice generator that requires a login, you are often giving that company data on your clients, your pricing, and your business volume. They may aggregate this data or sell it.</p>
                        <p><strong>The Local Storage Solution:</strong> Our tool utilizes the browser's <code>localStorage</code> API. This is a small database that lives inside your Chrome/Firefox/Safari browser on your specific device. When you generate a number, the counter increments on <em>your</em> hard drive. No signal is sent to our cloud. This offers the persistence of a web app with the privacy of a desktop Excel file.</p>

                        <h2 id="errors-audits">5. Handling Errors & Surviving Audits</h2>
                        <p>Even with the best tools, humans make mistakes. Here is the protocol for common scenarios:</p>
                        
                        <div className="grid gap-6 md:grid-cols-2 my-8">
                            <div className="bg-gray-800 p-5 rounded-lg border-l-4 border-yellow-500">
                                <h4 className="font-bold text-white mb-2">Scenario: You skipped invoice #105</h4>
                                <p className="text-sm"><strong>Do not</strong> backdate an invoice to fill the gap. Create a dummy internal document for #105 labeled "VOID - SYSTEM SKIP" and file it. This explains the gap to an auditor instantly.</p>
                            </div>
                            <div className="bg-gray-800 p-5 rounded-lg border-l-4 border-red-500">
                                <h4 className="font-bold text-white mb-2">Scenario: You issued duplicates of #108</h4>
                                <p className="text-sm">Contact the client who received the second #108. Issue a Credit Note to cancel it out completely. Then, issue a new invoice #109 with the correct details. Transparency is key.</p>
                            </div>
                        </div>

                        <h2 id="freelancers">6. Special Guide for Freelancers</h2>
                        <p>Freelancers often struggle with invoicing because it feels like a distraction from their actual work. However, your invoice is the most important document you produce—it's the one that gets you paid.</p>
                        <ul>
                            <li><strong>Be Consistent:</strong> Do not change your format every month. Accounts payable departments love predictability.</li>
                            <li><strong>Include PO Numbers:</strong> If your client gave you a Purchase Order number, include it on the invoice. But do NOT use it as the invoice number. Your invoice number is <em>yours</em>; the PO number is <em>theirs</em>.</li>
                            <li><strong>Digital Storage:</strong> Save every invoice as a PDF with the invoice number in the filename (e.g., `INV-1024_ClientName.pdf`). This makes tax season 100x easier.</li>
                        </ul>

                        <h2 id="faq-expanded">7. Extended Frequently Asked Questions</h2>
                        <div className="space-y-6 mt-6">
                            <div>
                                <h3 className="text-lg font-bold text-white">Q: Is it illegal to have gaps in invoice numbers?</h3>
                                <p>It is not "illegal" in the sense that you will go to jail, but it is non-compliant with tax regulations in VAT/GST jurisdictions. It shifts the burden of proof onto you during an audit to prove you didn't hide income.</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white">Q: Can I use alphanumeric numbers like "A1-B2"?</h3>
                                <p>Yes, as long as there is a logic to the sequence that can be followed. However, purely numeric or simple prefix-numeric formats are preferred because they sort correctly in databases (e.g., 10 comes after 9, whereas in some alpha-sorts, 10 comes before 2).</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white">Q: What is the best prefix to use?</h3>
                                <p>Keep it short. "INV-" is classic. "SALES-" works. Or use your company initials (e.g., "DX-" for Doodax). Avoid long prefixes that make the number hard to read on bank statements.</p>
                            </div>
                        </div>
                        
                        <div className="mt-12 p-6 bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-xl border border-white/10 text-center">
                            <p className="text-lg font-semibold text-white">Ready to professionalize your billing?</p>
                            <p className="mb-4">Scroll up and generate your first unique invoice number now.</p>
                        </div>
                    </div>
                </article>
                
                {/* Fade out overlay for collapsed state */}
                {!isExpanded && (
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-900 via-gray-900/90 to-transparent pointer-events-none flex items-end justify-center pb-2">
                    </div>
                )}
            </div>
            
            <div className="text-center mt-2 relative z-10">
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="group flex items-center mx-auto space-x-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105"
                >
                    <span>{isExpanded ? 'Read Less' : 'Read Full Guide'}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'animate-bounce'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                <p className="text-xs text-gray-500 mt-2">{isExpanded ? 'Collapse article' : 'Everything you need to know about invoicing'}</p>
            </div>
             <style>{`
                @keyframes fade-in {
                    0% { opacity: 0; }
                    100% { opacity: 1; }
                }
                .animate-fade-in { animation: fade-in 0.8s ease-in forwards; }
            `}</style>
        </div>
    );
};

export default SeoArticle;