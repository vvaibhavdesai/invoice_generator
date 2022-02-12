import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { formatDate } from "../lib/utils";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  table: {
    width: "100%",
    borderSpacing: 0,
    display: "flex",
    flexDirection: "column",
  },
  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
  invoiceHolderDetails: {
    width: "100%",
    display: "flex",
    gap: "2rem",
    alignItems: "flex-start",
  },
  formHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  formBottom: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    margin: 50,
  },
  bottomContainer: {
    width: "`100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  margin: {
    margin: 5,
  },
});

// Create Document Component
export default function MyDocument() {
  const invoiceList = useSelector((state) => state.user.invoiceList);
  const { invoiceId } = useParams();
  const invoice = invoiceList.find((invoices) => invoices._id === invoiceId);

  return (
    <PDFViewer style={styles.viewer}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.invoiceHolderDetails}>
            <View style={styles.section}>
              <Text>{invoice._id}</Text>
            </View>
            <View style={styles.section}>
              <Text>{formatDate(invoice.date)}</Text>
              <Text>{invoice.customer.email}</Text>
            </View>
          </View>
          <View>
            <View style={styles.table}>
              <View style={styles.formHeader}>
                <Text>ITEM</Text>
                <Text>QUANTITY</Text>
                <Text>UNIT PRICE</Text>
                <Text>TOTAL</Text>
              </View>
              <View style={styles.table}>
                {invoice.itemsList.map((item) => (
                  <View style={styles.formHeader}>
                    <Text>{item.itemName}</Text>
                    <Text>{item.quantity}</Text>
                    <Text>Rs. {item.price}</Text>
                    <Text>Rs. {item.subTotal.toFixed(2)}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.formBottom}>
              <View style={styles.margin}>
                <Text>Sub Total</Text>
                <Text>Rs. {invoice.subTotal}</Text>
              </View>
              <View style={styles.margin}>
                <Text>Tax</Text>
                <Text>{`(${invoice.tax}%)`}</Text>
              </View>
              <View style={styles.margin}>
                <Text>Discount</Text>
                <Text>{`(${invoice.discount}%)`}</Text>
              </View>
            </View>
            <View style={styles.formBottom}>
              <View>
                <Text>GrandTotal</Text>
                <Text>Rs.{invoice.grandTotal}</Text>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
