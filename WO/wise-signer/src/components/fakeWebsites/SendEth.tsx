"use client";

import { useState } from "react";
import { FaEthereum, FaPaperPlane } from "react-icons/fa";
import { FakeWebsiteComponentProps, TransactionDetails } from "@/types";
import BrowserNavBar from "@/components/fakeWebsites/BrowserNavBar";
import { questions, SignOrRejectQuestionData, TREZOR_FRIEND_WALLET } from "@/data/questions";

const URL = "https://portfolio.metamask.io/transfer?tab=send";

export default function SendEth({
    questionId,
    primaryButtonText = "Transfer",
    onPrimaryButtonClick,
    buttonDisabled = false,
}: FakeWebsiteComponentProps) {
    const transactionOrSignatureData = (questions[questionId - 1] as SignOrRejectQuestionData).transactionOrSignatureData;
    const amount = (transactionOrSignatureData as TransactionDetails).amount!;
    const amountWei = (parseFloat(amount) * 10 ** 18).toLocaleString('fullwide', { useGrouping: false });
    const ethToShow = questions[questionId - 1].otherData![0];

    console.log(ethToShow)

    return (
        <div className="max-w-6xl mx-auto bg-[#111111] text-white rounded-lg shadow-md overflow-hidden mt-8 relative">
            <BrowserNavBar url={URL} />

            {/* Main Content */}
            <div className="min-h-[500px] p-8">
                <div className="max-w-lg mx-auto">
                    <h1 className="text-3xl font-bold mb-8 flex items-center">
                        <FaEthereum className="mr-3 text-blue-500" />
                        Send ETH
                    </h1>

                    {/* Address Field - Now Readonly */}
                    <div className="mb-6">
                        <label className="block text-gray-400 mb-2 font-medium">Recipient Address</label>
                        <input
                            type="text"
                            value={TREZOR_FRIEND_WALLET}
                            readOnly
                            className="w-full bg-[#222222] px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500 cursor-not-allowed"
                            placeholder="ETH Address (0x...)"
                        />
                    </div>

                    {/* Amount Field - Now Readonly */}
                    <div className="mb-6">
                        <label className="block text-gray-400 mb-2 font-medium">Amount</label>
                        <div className="flex flex-col space-y-4">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                                    <FaEthereum className="text-blue-500" />
                                </div>
                                <input
                                    type="number"
                                    value={ethToShow}
                                    readOnly
                                    className="w-full bg-[#222222] pl-10 pr-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500 cursor-not-allowed"
                                    placeholder="0.00"
                                    step="0.01"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                    <span className="text-gray-400">ETH</span>
                                </div>
                            </div>

                            {/* Wei value display */}
                            <div className="bg-[#1a1a1a] p-3 rounded-lg border border-gray-800">
                                <div className="text-sm text-gray-400 mb-1">Amount in wei:</div>
                                <div className="font-mono text-sm text-gray-300 overflow-x-auto whitespace-nowrap">
                                    {amountWei}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Transfer Button */}
                    <div className="mt-8">
                        <button
                            onClick={onPrimaryButtonClick}
                            disabled={buttonDisabled}
                            className={`w-full px-6 py-4 rounded-lg flex items-center justify-center cursor-pointer ${buttonDisabled
                                ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                                : 'bg-blue-600 text-white hover:bg-blue-700 hover:text-white'
                                }`}
                        >
                            <FaPaperPlane className="mr-2" />
                            {primaryButtonText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}