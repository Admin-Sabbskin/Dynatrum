const navigationLinks = [
	{ label: 'Services', href: '#services' },
	{ label: 'Case Studies', href: '#case-studies' },
	{ label: 'Insights', href: '#insights' },
	{ label: 'Contact', href: '#contact' },
]

function Footer() {
	return (
		<footer className="bg-slate-950 text-slate-300">
			<div className="section-shell py-16 sm:py-20">
				<div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-[1.4fr_1fr_1fr]">
					<div>
						<p className="text-xs font-semibold tracking-[0.18em] text-white">DYNATRUM</p>
						<p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
							Finance-led ERP consulting for teams that need execution rigor,
							financial control, and measurable outcomes.
						</p>
					</div>

					<div>
						<h2 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
							Navigation
						</h2>
						<ul className="mt-5 space-y-3 text-sm text-slate-300">
							{navigationLinks.map((link) => (
								<li key={link.href}>
									<a href={link.href} className="transition-colors hover:text-white">
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h2 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
							Contact
						</h2>
						<ul className="mt-5 space-y-3 text-sm text-slate-300">
							<li>consulting@yourcompany.com</li>
							<li>+1 (000) 000-0000</li>
							<li>Remote · Global</li>
						</ul>
					</div>
				</div>

				<div className="mt-7 flex flex-col gap-2 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
					<span>© 2026 Dynatrum Consulting. All rights reserved.</span>
					<span>Privacy · Terms</span>
				</div>
			</div>
		</footer>
	)
}

export default Footer
