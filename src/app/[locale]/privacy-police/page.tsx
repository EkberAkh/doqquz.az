import { Box, Text, Heading, Container } from "@chakra-ui/react";

import { useTranslations } from "next-intl";
import Link from "next/link";

import React from "react";
//

const Privacy = () => {
  const t = useTranslations();
  return (
    <Box bg="white" width="100%">
      <Box>
        <Heading>{t("PrivacyPolice.header")}</Heading>
        <Text>
          {t.rich("PrivacyPolice.mainSection", {
            span: (chunks) => <span>{chunks}</span>,
            b: (chunks) => <b>{chunks}</b>,
            Link: (chunks) => <Link href={""}>{chunks}</Link>,
          })}
        </Text>
        <Text>
          {t.rich("PrivacyPolice.1", {
            b: (chunks) => <b>{chunks}</b>,

            div: (chunks) => (
              <div style={{ marginBottom: "6px" }}>{chunks}</div>
            ),
            span: (chunks) => (
              <span style={{ fontSize: "1.25rem" }}>{chunks}</span>
            ),
          })}
        </Text>
        <Text>
          {t.rich("PrivacyPolice.2", {
            b: (chunks) => <b>{chunks}</b>,
            div: (chunks) => (
              <div style={{ marginBottom: "6px" }}>{chunks}</div>
            ),
            span: (chunks) => (
              <span style={{ fontSize: "1.25rem" }}>{chunks}</span>
            ),
          })}
        </Text>
        <Text>
          {t.rich("PrivacyPolice.3", {
            b: (chunks) => <b>{chunks}</b>,
            div: (chunks) => (
              <div style={{ marginBottom: "6px" }}>{chunks}</div>
            ),
            span: (chunks) => (
              <span style={{ fontSize: "1.25rem" }}>{chunks}</span>
            ),
          })}
        </Text>

        <Text>
          {t.rich("PrivacyPolice.2", {
            b: (chunks) => <b>{chunks}</b>,
            div: (chunks) => (
              <div style={{ marginBottom: "6px" }}>{chunks}</div>
            ),
            span: (chunks) => (
              <span style={{ fontSize: "1.25rem" }}>{chunks}</span>
            ),
          })}
        </Text>
        <Text>
          {t.rich("PrivacyPolice.3", {
            b: (chunks) => <b>{chunks}</b>,
            div: (chunks) => (
              <div style={{ marginBottom: "6px" }}>{chunks}</div>
            ),
            span: (chunks) => (
              <span style={{ fontSize: "1.25rem" }}>{chunks}</span>
            ),
          })}
        </Text>
        <Text>
          {t.rich("PrivacyPolice.4", {
            b: (chunks) => <b>{chunks}</b>,
            div: (chunks) => (
              <div style={{ marginBottom: "6px" }}>{chunks}</div>
            ),
            span: (chunks) => (
              <span style={{ fontSize: "1.25rem" }}>{chunks}</span>
            ),
          })}
        </Text>
        <Text>
          {t.rich("PrivacyPolice.5", {
            b: (chunks) => <b>{chunks}</b>,
            div: (chunks) => (
              <div style={{ marginBottom: "6px" }}>{chunks}</div>
            ),
            span: (chunks) => (
              <span style={{ fontSize: "1.25rem" }}>{chunks}</span>
            ),
          })}
        </Text>
        <Text>
          {t.rich("PrivacyPolice.7", {
            b: (chunks) => <b>{chunks}</b>,
            div: (chunks) => (
              <div style={{ marginBottom: "6px" }}>{chunks}</div>
            ),
            span: (chunks) => (
              <span style={{ fontSize: "1.25rem" }}>{chunks}</span>
            ),
          })}
        </Text>
        <Text>
          {t.rich("PrivacyPolice.8", {
            b: (chunks) => <b>{chunks}</b>,
            div: (chunks) => (
              <div style={{ marginBottom: "6px" }}>{chunks}</div>
            ),
            span: (chunks) => (
              <span style={{ fontSize: "1.25rem" }}>{chunks}</span>
            ),
          })}
        </Text>
        <Text>
          {t.rich("PrivacyPolice.9", {
            b: (chunks) => <b>{chunks}</b>,
            div: (chunks) => (
              <div style={{ marginBottom: "6px" }}>{chunks}</div>
            ),
            span: (chunks) => (
              <span style={{ fontSize: "1.25rem" }}>{chunks}</span>
            ),
          })}
        </Text>
        <Text>
          {t.rich("PrivacyPolice.10", {
            div: (chunks) => (
              <div style={{ marginBottom: "6px" }}>{chunks}</div>
            ),
            span: (chunks) => (
              <span style={{ fontSize: "1.25rem" }}>{chunks}</span>
            ),
          })}
        </Text>
        <Text>
          {t.rich("PrivacyPolice.11", {
            b: (chunks) => <b>{chunks}</b>,
            div: (chunks) => (
              <div style={{ marginBottom: "6px" }}>{chunks}</div>
            ),
            span: (chunks) => (
              <span style={{ fontSize: "1.25rem" }}>{chunks}</span>
            ),
          })}
        </Text>
        <Text>
          {t.rich("PrivacyPolice.12", {
            b: (chunks) => <b>{chunks}</b>,
            div: (chunks) => (
              <div style={{ marginBottom: "6px" }}>{chunks}</div>
            ),
            span: (chunks) => (
              <span style={{ fontSize: "1.25rem" }}>{chunks}</span>
            ),
          })}
        </Text>
        <Text>
          {t.rich("PrivacyPolice.13", {
            b: (chunks) => <b>{chunks}</b>,

            span: (chunks) => (
              <span style={{ fontSize: "1.25rem", marginBottom: "6px" }}>
                {chunks}
              </span>
            ),
          })}
        </Text>
        <Text>
          {t.rich("PrivacyPolice.14", {
            div: (chunks) => (
              <div style={{ marginBottom: "6px" }}>{chunks}</div>
            ),
            span: (chunks) => (
              <span style={{ fontSize: "1.25rem", marginBottom: "6px" }}>
                {chunks}
              </span>
            ),
          })}
        </Text>
      </Box>
    </Box>
  );
};

export default Privacy;
