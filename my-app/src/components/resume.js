import React from "react";
import "../css/style.css";
import { useState } from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import resume from './resume/resume.pdf'

export default function Resume() {
    return (

		<div>
          <hr />
         <h2 id="sec3">Resume</h2>
		 <iframe src="https://docs.google.com/document/d/1h6zpG5DeQcUJ75cVd8QOLamo754y6HdKeizJhXSKPDs" frameborder="0" height="500px" width="100%"></iframe>
      </div>

	);
};


