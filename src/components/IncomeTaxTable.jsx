const TAX = 20.0

const IncomeTaxTable = ({
  totalIncome = 0,
  incomeType = 'gross',
  incomePeriod = 'monthly',
  setIncomePeriod,
  prevStep,
}) => {
  const getDailyMoney = () => {
    switch (incomePeriod) {
      case 'annually':
        return totalIncome / 365
      case 'monthly':
        return totalIncome / 30
      case 'fortnightly':
        return totalIncome / 14
      case 'weekly':
        return totalIncome / 7
      default:
        return 0
    }
  }

  const rounded = (val) => {
    return parseFloat(val).toFixed(3)
  }

  const getTaxValue = (val) => {
    return rounded(val - val * (1 - TAX / 100))
  }

  const getWeeklyGrossIncome = () => {
    if (incomeType === 'gross') return rounded(getDailyMoney() * 7)
    else return rounded((getDailyMoney() * 7) / (1 - TAX / 100))
  }

  const getFortnightlyGrossIncome = () => {
    if (incomeType === 'gross') return rounded(getDailyMoney() * 14)
    else return rounded((getDailyMoney() * 14) / (1 - TAX / 100))
  }

  const getMonthlyGrossIncome = () => {
    if (incomeType === 'gross') return rounded(getDailyMoney() * 30)
    else return rounded((getDailyMoney() * 30) / (1 - TAX / 100))
  }

  const getAnnualGrossIncome = () => {
    if (incomeType === 'gross') return rounded(getDailyMoney() * 365)
    else return rounded((getDailyMoney() * 365) / (1 - TAX / 100))
  }

  const getWeeklyNetIncome = () => {
    return rounded(getWeeklyGrossIncome() - getTaxValue(getWeeklyGrossIncome()))
  }

  const getFortnightlyNetIncome = () => {
    return rounded(
      getFortnightlyGrossIncome() - getTaxValue(getFortnightlyGrossIncome())
    )
  }

  const getMonthlyNetIncome = () => {
    return rounded(
      getMonthlyGrossIncome() - getTaxValue(getMonthlyGrossIncome())
    )
  }

  const getAnnualNetIncome = () => {
    return rounded(getAnnualGrossIncome() - getTaxValue(getAnnualGrossIncome()))
  }

  const getDisplayValue = () => {
    switch (incomePeriod) {
      case 'annually':
        if (incomeType === 'gross') return getAnnualGrossIncome()
        else return getAnnualNetIncome()
      case 'monthly':
        if (incomeType === 'gross') return getMonthlyGrossIncome()
        else return getMonthlyNetIncome()
      case 'fortnightly':
        if (incomeType === 'gross') return getFortnightlyGrossIncome()
        else return getFortnightlyNetIncome()
      case 'weekly':
        if (incomeType === 'gross') return getWeeklyGrossIncome()
        else return getWeeklyNetIncome()
      default:
        return 0
    }
  }

  return (
    <div className="mx-auto w-full max-w-6xl rounded-lg border border-gray-200 bg-white px-8 py-6">
      <h4 className="mb-6 text-lg font-semibold text-gray-700">
        Income Tax Calculator
      </h4>
      <div className="grid gap-y-8">
        <div className="flex flex-wrap items-center gap-x-3 py-2">
          <div className="rounded-md text-2xl md:text-4xl font-bold text-blue-600">
            ${getDisplayValue()}
          </div>
          <span>your {incomeType}</span>
          <select
            value={incomePeriod}
            onChange={(e) => setIncomePeriod(e.target.value)}
            className="arrowless appearance-none text-center rounded-lg focus:bg-gray-100 bg-white border-none py-2.5 text-blue-600 cursor-pointer focus:text-gray-900 focus:outline-none "
          >
            <option value="weekly">weekly</option>
            <option value="fortnightly">fortnightly</option>
            <option value="monthly">monthly</option>
            <option value="annually">anual</option>
          </select>
          <span>income</span>
        </div>
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full border-collapse border border-gray-200 bg-white">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="whitespace-nowrap border border-gray-200 py-4 px-6 text-left text-xs font-semibold uppercase tracking-wider text-gray-500"
                    >
                      Frequency
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap border border-gray-200 py-4 px-6 text-left text-xs font-semibold uppercase tracking-wider text-gray-500"
                    >
                      Gross Income
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap border border-gray-200 py-4 px-6 text-left text-xs font-semibold uppercase tracking-wider text-gray-500"
                    >
                      Tax
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap border border-gray-200 py-4 px-6 text-left text-xs font-semibold uppercase tracking-wider text-gray-500"
                    >
                      Net Income
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-gray-50 even:bg-white">
                    <td className="whitespace-nowrap border border-gray-200 px-6 py-3.5">
                      <p className="line-clamp-1 text-gray-700">Weekly</p>
                    </td>
                    <td className="whitespace-nowrap border border-gray-200 px-6 py-3.5">
                      <p className="line-clamp-1 text-gray-700">
                        ${getWeeklyGrossIncome()}
                      </p>
                    </td>
                    <td className="whitespace-nowrap border border-gray-200 px-6 py-3.5">
                      <p className="line-clamp-1 text-gray-700">
                        ${getTaxValue(getWeeklyGrossIncome())}
                      </p>
                    </td>
                    <td className="whitespace-nowrap border border-gray-200 px-6 py-3.5">
                      <p className="line-clamp-1 text-gray-700">
                        ${getWeeklyNetIncome()}
                      </p>
                    </td>
                  </tr>
                  <tr className="odd:bg-gray-50 even:bg-white">
                    <td className="whitespace-nowrap border border-gray-200 px-6 py-3.5">
                      <p className="line-clamp-1 text-gray-700">Fortnightly</p>
                    </td>
                    <td className="whitespace-nowrap border border-gray-200 px-6 py-3.5">
                      <p className="line-clamp-1 text-gray-700">
                        ${getFortnightlyGrossIncome()}
                      </p>
                    </td>
                    <td className="whitespace-nowrap border border-gray-200 px-6 py-3.5">
                      <p className="line-clamp-1 text-gray-700">
                        ${getTaxValue(getFortnightlyGrossIncome())}
                      </p>
                    </td>
                    <td className="whitespace-nowrap border border-gray-200 px-6 py-3.5">
                      <p className="line-clamp-1 text-gray-700">
                        ${getFortnightlyNetIncome()}
                      </p>
                    </td>
                  </tr>
                  <tr className="odd:bg-gray-50 even:bg-white">
                    <td className="whitespace-nowrap border border-gray-200 px-6 py-3.5">
                      <p className="line-clamp-1 text-gray-700">Monthly</p>
                    </td>
                    <td className="whitespace-nowrap border border-gray-200 px-6 py-3.5">
                      <p className="line-clamp-1 text-gray-700">
                        ${getMonthlyGrossIncome()}
                      </p>
                    </td>
                    <td className="whitespace-nowrap border border-gray-200 px-6 py-3.5">
                      <p className="line-clamp-1 text-gray-700">
                        ${getTaxValue(getMonthlyGrossIncome())}
                      </p>
                    </td>
                    <td className="whitespace-nowrap border border-gray-200 px-6 py-3.5">
                      <p className="line-clamp-1 text-gray-700">
                        ${getMonthlyNetIncome()}
                      </p>
                    </td>
                  </tr>
                  <tr className="odd:bg-gray-50 even:bg-white">
                    <td className="whitespace-nowrap border border-gray-200 px-6 py-3.5">
                      <p className="line-clamp-1 text-gray-700">Annually</p>
                    </td>
                    <td className="whitespace-nowrap border border-gray-200 px-6 py-3.5">
                      <p className="line-clamp-1 text-gray-700">
                        ${getAnnualGrossIncome()}
                      </p>
                    </td>
                    <td className="whitespace-nowrap border border-gray-200 px-6 py-3.5">
                      <p className="line-clamp-1 text-gray-700">
                        ${getTaxValue(getAnnualGrossIncome())}
                      </p>
                    </td>
                    <td className="whitespace-nowrap border border-gray-200 px-6 py-3.5">
                      <p className="line-clamp-1 text-gray-700">
                        ${getAnnualNetIncome()}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div>
          <button
            onClick={prevStep}
            className="my-2 block rounded-md bg-primary px-5 py-3 text-sm font-semibold uppercase text-white transition-colors hover:bg-primary-dark"
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  )
}

export default IncomeTaxTable
