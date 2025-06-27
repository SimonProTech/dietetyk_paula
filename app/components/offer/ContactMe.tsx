'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const ContactMe = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Link
                href="/kontakt"
                className="inline-block hover:scale-[1.02] bg-pink-600 hover:shadow-xl text-white font-bold  md:py-4 py-4 px-12 md:px-24 rounded-md transition-all"
            >
                Skontaktuj się ze mną
            </Link>
        </motion.div>
    )
}

export default ContactMe
