
import NavbarThird from '../../../components/en/Navbar-third';
import React, { Component, Fragment } from 'react'
import axios from 'axios'
import Head from 'next/head';
import Spacer from '../../../components/en/spacer';


  const Historia = (props) => (
    <div>
<Head>
<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>


</Head>

        <NavbarThird/>
        <main>
        <h2 class="news-header">Nasza Historia</h2>
        <Spacer></Spacer>
        <div class="container mt-5 mb-5">
	<div class="row">
		<div class="col-md-6 offset-md-3">
			
			<ul class="timeline">
				<li>
					<a class="timeline_title" >WSI Lublin</a>
					<a class="float-right">1953</a>
					<p>Utworzenie Wieczorowej Szkoły Inżynierskiej w Lublinie.</p>
				</li>
				<li>
                    <a class="timeline_title" >Wydział Elektryczny</a>
					<a class="float-right">1964</a>
					<p>Utworzenie Wydziału Elektrycznego Wieczorowej SzkołyInżynierskiej w Lublinie.</p>
				</li>
				<li>
					<a class="timeline_title">Pracownia Maszyn Elektrycznych</a>
					<a class="float-right">1964</a>
					<p>Powstał Zespół i Pracownia Maszyn Elektrycznych, Wydziału Elektrycznego Wieczorowej SzkołyInżynierskiej w Lublinie pod kierownictwem doc. inż. Mieczysława Romualda Krzywickiego. Organizatorem i kierownikiem Pracowni Maszyn Elektrycznych był mgr inż. Kazimierz Kawiak.</p>
				</li>
                <li>
					<a class="timeline_title">Wyższa Szkoła Inżynierska</a>
					<a class="float-right">1965</a>
					<p>Wieczorowa Szkoła Inżynierska zostaje przekształcona w Wyższą Szkołę Inżynierską w Lublinie</p>
				</li>
                <li>
					<a class="timeline_title">Zespół Elektroenergetyki Przemysłowej</a>
					<a class="float-right">1974</a>
					<p>Zespół Maszyn Elektrycznych wszedł w skład Zakładu Elektroenergetyki Przemysłowej, którego kierownikiem był dr inż. Wiesław Lasocki.</p>
				</li>
                <li>
					<a class="timeline_title">Zakład Automatyzacji i Elektryfikacji Kopalń</a>
					<a class="float-right">1976</a>
					<p>Na bazie Zespołu Maszyn Elektrycznych utworzono Zakład Automatyzacji i Elektryfikacji Kopalń. Kierowali nim kolejno dr inż. Wiesław Lasocki, dr inż. Stanisław Tarasiewicz, dr inż. Waldemar Smołuch i dr inż. Marek Różycki.</p>
				</li>
                <li>
					<a class="timeline_title">Politechnika Lubelska</a>
					<a class="float-right">1977</a>
					<p>Wyższa Szkoła Inżynierska zostaje przekształcona w Politechnikę Lubelską.</p>
				</li>
                <li>
					<a class="timeline_title">Zakład Automatyzacji i Elektryfikacji Kopalń</a>
					<a class="float-right">1985</a>
					<p>Zakład Automatyzacji i Elektryfikacji Kopalń przekształcono w Zakład Maszyn i Napędów Górniczych, którego kierownikiem był dr hab. inż. Jan Skwarna.</p>
				</li>
                <li>
					<a class="timeline_title">Zakład Maszyn i Napędów Górniczych</a>
					<a class="float-right">1986</a>
					<p>Zakład Maszyn i Napędów Górniczych przekształcono w Zakład Maszyn i Napędów Elektrycznych, kierownikiem był dr hab. inż.. Jan Skwarna, a od 1990 r. prof. dr hab. inż. Andrzej Horodecki.</p>
				</li>
                <li>
					<a class="timeline_title">Podział</a>
					<a class="float-right">1991</a>
					<p>Zakład Maszyn i Napędów Elektrycznych został podzielony na:<br/>
                        - Katedrę Maszyn Elektrycznych pod kierunkiem prof. dr hab. inż. Eugeniusza Kozieja, a od 1999 r.prof. dr hab. inż. Andrzeja Horodeckiego.<br/>
                        - Katedrę Napędów Elektrycznych pod kierunkiem prof. dr hab. inż.. Andrzeja Horodeckiego, a od 1999 r. dr hab. inż. Jana Kolano.</p>
				</li>
                <li>
					<a class="timeline_title">KNME</a>
					<a class="float-right">2008</a>
					<p>Utworzono Katedrę Napędów i Maszyn Elektrycznych pod kierunkiem dr hab. inż. Jana Kolano, przez połączenie Katedry Napędów Elektrycznych i Katedry Maszyn Elektrycznych.</p>
				</li>
                <li>
					<a class="timeline_title">Nowy Kierownik</a>
					<a class="float-right">2012</a>
					<p> Kierownikiem Katedry Napędów i Maszyn Elektrycznych został dr hab. inż. Wojciech Jarzyna</p>
				</li>
                <li>
					<a class="timeline_title">Nowa Witryna</a>
					<a class="float-right">2020</a>
					<p>Katedra Napędów i Maszyn Elektrycznych doczekała się nowej strony internetowej.</p>
				</li>
			</ul>
		</div>
	</div>
</div>



        </main>



        <style >{` 
.timeline_title{
    font-family:Poppins;
    font-weight: bold;
}
.news-header{

    padding: 30px 0 10px 0;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;
    font-size: 1.8rem;
    text-align: center;
}


ul.timeline {
    list-style-type: none;
    position: relative;
}
ul.timeline:before {
    content: ' ';
    background: #3498db;
    display: inline-block;
    position: absolute;
    left: 29px;
    width: 2px;
    height: 100%;
    z-index: 400;
}
ul.timeline > li {
    margin: 20px 0;
    padding-left: 20px;
}
ul.timeline > li:before {
    content: ' ';
    background: white;
    display: inline-block;
    position: absolute;
    border-radius: 50%;
    border: 3px solid black;
    left: 20px;
    width: 20px;
    height: 20px;
    z-index: 400;
}
.float-right{
    font-family:Poppins;
}
  
`}</style>
    </div>
  );




export default Historia;


