import { FC } from "react";

export const Build: FC = () => (
	<>
		<h2 id="building">Zelf bouwen</h2>

		<h3>Vereisten</h3>
		<ul>
			<li>Flutter</li>
			<li>Git</li>
		</ul>

		<h3>Stappen</h3>
		<p>
			Om Argo zelf te kunnen bouwen, moet je eerst Flutter hebben. Als je dit nog niet hebt, kan je dit downloaden op{" "}
			<a href="https://flutter.dev/docs/get-started/install">de officiële website van Flutter</a>.
		</p>
		<p>Vervolgens kan je de source code downloaden door middel van het volgende commando:</p>
		<pre>
			<code>
				git clone https://github.com/Argo-Client/app Argo <br />
				cd Argo
			</code>
		</pre>

		<p>Nu je de source code hebt, kan je de app bouwen met het volgende commando:</p>
		<pre>
			<code>flutter build</code>
		</pre>
	</>
);
