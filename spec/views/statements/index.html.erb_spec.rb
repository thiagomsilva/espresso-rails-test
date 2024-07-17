require 'rails_helper'

RSpec.describe "statements/index", type: :view do
  before(:each) do
    assign(:statements, [
      Statement.create!(
        cost: 2,
        merchant: "Merchant",
        transaction_id: 3,
        category: nil
      ),
      Statement.create!(
        cost: 2,
        merchant: "Merchant",
        transaction_id: 3,
        category: nil
      )
    ])
  end

  it "renders a list of statements" do
    render
    assert_select "tr>td", text: 2.to_s, count: 2
    assert_select "tr>td", text: "Merchant".to_s, count: 2
    assert_select "tr>td", text: 3.to_s, count: 2
    assert_select "tr>td", text: nil.to_s, count: 2
  end
end
