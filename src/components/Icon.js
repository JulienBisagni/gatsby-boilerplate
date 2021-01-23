import React from "react"
import {
  MdInfo,
  MdInsertInvitation,
  MdLocalShipping,
  MdSupervisorAccount,
  MdDashboard,
  MdPayment,
  MdDateRange,
  MdAirportShuttle,
  MdPages,
  MdFlight,
  MdArrowBack,
  MdArrowForward,
  MdSearch,
  MdSend,
  MdCheckCircle,
  MdClose,
} from "react-icons/md"
import { IoPizzaOutline } from "react-icons/io5"

import styles from "../styles/components/icon.module.scss"

export default function Cart({ icon, additionalClassName }) {
  switch (icon) {
    case "info":
      return <MdInfo className={`${styles.icon} ${additionalClassName}`} />
    case "insert_invitation":
      return (
        <MdInsertInvitation
          className={`${styles.icon} ${additionalClassName}`}
        />
      )
    case "local_shipping":
      return (
        <MdLocalShipping className={`${styles.icon} ${additionalClassName}`} />
      )
    case "supervisor_account":
      return (
        <MdSupervisorAccount
          className={`${styles.icon} ${additionalClassName}`}
        />
      )
    case "dashboard":
      return <MdDashboard className={`${styles.icon} ${additionalClassName}`} />
    case "payment":
      return <MdPayment className={`${styles.icon} ${additionalClassName}`} />
    case "data_range":
      return <MdDateRange className={`${styles.icon} ${additionalClassName}`} />
    case "airport_shutle":
      return (
        <MdAirportShuttle className={`${styles.icon} ${additionalClassName}`} />
      )
    case "pages":
      return <MdPages className={`${styles.icon} ${additionalClassName}`} />
    case "flight":
      return <MdFlight className={`${styles.icon} ${additionalClassName}`} />
    case "arrow_back":
      return <MdArrowBack className={`${styles.icon} ${additionalClassName}`} />
    case "arrow_forward":
      return (
        <MdArrowForward className={`${styles.icon} ${additionalClassName}`} />
      )
    case "search":
      return <MdSearch className={`${styles.icon} ${additionalClassName}`} />
    case "send":
      return <MdSend className={`${styles.icon} ${additionalClassName}`} />
    case "send_circle":
      return (
        <MdCheckCircle className={`${styles.icon} ${additionalClassName}`} />
      )
    case "pizza_outline":
      return (
        <IoPizzaOutline className={`${styles.icon} ${additionalClassName}`} />
      )
    case "close":
      return <MdClose className={`${styles.icon} ${additionalClassName}`} />
    default:
      return <MdInfo className={`${styles.icon} ${additionalClassName}`} />
  }
}
