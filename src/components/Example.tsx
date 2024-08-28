"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Example() {
	const settings = {
		className: "center",
		centerMode: true,
		infinite: true,
		centerPadding: "60px",
		slidesToShow: 3,
		speed: 500,
	};
	return (
		<div className="slider-container">
			<Slider {...settings}>
				<div className="bg-slate-50">
					<h3>1</h3>
				</div>
				<div className="bg-red-500">
					<h3>2</h3>
				</div>
				<div className="bg-blue-500">
					<h3>3</h3>
				</div>
				<div className="bg-gray-500">
					<h3>4</h3>
				</div>
				<div className="bg-yellow-500">
					<h3>5</h3>
				</div>
				<div className="bg-green-500">
					<h3>6</h3>
				</div>
			</Slider>
		</div>
	);
}

export default Example;
