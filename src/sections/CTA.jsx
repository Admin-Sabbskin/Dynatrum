const CONSULTATION_FORM_URL = 'https://forms.gle/your-consultation-form'

function CTA() {
	return (
		<section id="contact" className="bg-slate-950">
			<div className="section-shell flex flex-col items-center py-28 text-center sm:py-32">
				<p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
					Consultation
				</p>
				<h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
					Ready to discuss your ERP transformation?
				</h2>
				<p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
					Book a finance-led consultation to get clear next steps, delivery
					priorities, and a practical implementation path.
				</p>

				<a
					href={CONSULTATION_FORM_URL}
					target="_blank"
					rel="noopener noreferrer"
					className="btn-inverse mt-10"
				>
					Book Consultation
				</a>
			</div>
		</section>
	)
}

export default CTA
