'use client'

import React from 'react'
import { NextPage, GetServerSideProps } from 'next'

interface ErrorPageProps {
  statusCode: number
}

const ErrorPage: NextPage<ErrorPageProps> = ({ statusCode }) => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Error {statusCode}</h1>
        <p className="text-lg">Sorry, there was an error.</p>
        {/* Optionally, you can add different messages for specific error codes */}
        {statusCode === 404 && <p className="text-lg">The page you&apos;re looking for was not found.</p>}
        {statusCode === 500 && <p className="text-lg">An internal server error occurred.</p>}
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<ErrorPageProps> = async ({ res, err }: any) => {
  // Get the error status code
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { props: { statusCode } }
}

export default ErrorPage
