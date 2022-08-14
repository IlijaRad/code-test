import MoneyInput from './MoneyInput'

const IncomeTaxForm = ({
  totalIncome,
  setTotalIncome,
  incomePeriod,
  setIncomePeriod,
  incomeType,
  handleSelectIncomeType,
  nextStep,
}) => {
  return (
    <>
      <h4 className="mb-6 text-lg font-semibold text-gray-700">
        Income Tax Calculator
      </h4>
      <div className="grid gap-y-8">
        <div>
          <label className="text-gray-600" htmlFor="total-income">
            What is your total income?
          </label>
          <div className="flex items-center gap-x-2">
            <MoneyInput
              className="mt-3 block w-full appearance-none rounded-lg bg-white px-4 py-2.5 text-gray-900 shadow ring-1 ring-gray-900/[0.08] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onValueChange={(val) => setTotalIncome(val)}
              required
              value={totalIncome}
              id="total-income"
            />
            <select
              value={incomePeriod}
              onChange={(e) => setIncomePeriod(e.target.value)}
              className="mt-3 block w-full max-w-[140px] appearance-none rounded-lg bg-white px-4 py-2.5 text-gray-900 shadow ring-1 ring-gray-900/[0.08] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="weekly">Weekly</option>
              <option value="fortnightly">Fortnightly</option>
              <option value="monthly">Monthly</option>
              <option value="annually">Annually</option>
            </select>
          </div>
        </div>
        <div>
          <label className="text-gray-600" htmlFor="total-income">
            Please choose the income type
          </label>
          <div className="mt-3 flex gap-x-6">
            <div className="flex items-center gap-x-2">
              <input
                type="radio"
                className="h-5 w-5 text-primary ring-1 ring-inset ring-gray-300 checked:ring-primary focus:outline-none focus:ring-2 focus:ring-primary disabled:cursor-not-allowed disabled:bg-gray-50 disabled:ring-gray-200"
                name="income-type"
                id="gross-income"
                value="gross"
                onChange={handleSelectIncomeType}
                checked={incomeType === 'gross'}
              />
              <label
                htmlFor="gross-income"
                className="font-medium text-gray-600"
              >
                Gross Income
              </label>
            </div>

            <div className="flex items-center gap-x-2">
              <input
                type="radio"
                className="h-5 w-5 text-primary ring-1 ring-inset ring-gray-300 checked:ring-primary focus:outline-none focus:ring-2 focus:ring-primary disabled:cursor-not-allowed disabled:bg-gray-50 disabled:ring-gray-200"
                name="income-type"
                value="net"
                id="net-income"
                onChange={handleSelectIncomeType}
                checked={incomeType === 'net'}
              />
              <label htmlFor="net-income" className="font-medium text-gray-600">
                Net Income
              </label>
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={nextStep}
            className="block rounded-md bg-primary px-5 py-3 text-sm font-semibold uppercase text-white transition-colors hover:bg-primary-dark"
          >
            Calculate
          </button>
        </div>
      </div>
    </>
  )
}

export default IncomeTaxForm
