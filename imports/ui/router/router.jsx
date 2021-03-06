import React, { Component } from "react";
import PropTypes from "prop-types";
import {mount, withOptions} from "react-mounter";
import {LayoutContainer} from "/imports/ui/layouts/layout.jsx";
import {NotFound} from "/imports/ui/pages/not_found/not_found.jsx";
import {HomePageContainer} from "/imports/ui/pages/home/home.jsx";
import {AboutPageContainer} from "/imports/ui/pages/about/about.jsx";
/*IMPORTS*/

const reactMount = withOptions({
	rootProps: {
		className: "react-root"
	}
}, mount);

const freeRouteNames = [
	"home",
	"about"
];

export const routeGranted = function(routeName) {
	return true;
};

const freeRoutes = FlowRouter.group( { name: "free" } );

FlowRouter.notFound = {
	action () {
		reactMount(LayoutContainer, {
			content: (<NotFound />)
		});
	}
};

freeRoutes.route("/", {
    name: "home",

    title: "",

	triggersEnter: [
		function(context, redirect, stop) {
			
		}
	],
    action: function(routeParams, routeQuery) {
    	reactMount(LayoutContainer, {
			content: (
				<HomePageContainer routeParams={routeParams} />
			)
		});

    },
	triggersExit: [
		function(context, redirect) {
			
		}
	]
});

freeRoutes.route("/about", {
    name: "about",

    title: "About",

	triggersEnter: [
		function(context, redirect, stop) {
			
		}
	],
    action: function(routeParams, routeQuery) {
    	reactMount(LayoutContainer, {
			content: (
				<AboutPageContainer routeParams={routeParams} />
			)
		});

    },
	triggersExit: [
		function(context, redirect) {
			
		}
	]
});
