import { MetricCard } from "./MetricCard"

export const ContentRowMovies = () => {
	const metrics = [
		{
			title: "Movies in Data Base",
			color: "primary",
			value: 21,
			icon: "fa-film"
		},
		{
			title: "Total awards",
			color: "success",
			value: 79,
			icon: "fa-award"
		},
		{
			title: "Actors quantity",
			
			value: 49,
			icon: "fa-user"
		},
	]
	return (
		<div className="row">

		{
			metrics.map((metric, i) => <MetricCard key={metric.title + i} metric={metric} />)
        }

		</div>
	)
}
