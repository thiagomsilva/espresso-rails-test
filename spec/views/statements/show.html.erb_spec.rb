require 'rails_helper'

RSpec.describe "statements/show", type: :view do
  before(:each) do
    @statement = assign(:statement, Statement.create!(
      cost: 2,
      merchant: "Merchant",
      transaction_id: 3,
      category: nil
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/2/)
    expect(rendered).to match(/Merchant/)
    expect(rendered).to match(/3/)
    expect(rendered).to match(//)
  end
end
