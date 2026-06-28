-- SABR Fintech Ledger Schema (Phase 4 Production)
-- Purpose: Enforce 1.5% BSA/IK Levy and Automated Fee Splitting
-- Dependencies: bulk_crop_inventory table required for relational integrity

CREATE TYPE settlement_status AS ENUM ('PENDING_ESCROW', 'DISBURSED_SPLIT', 'BSA_REMITTED');

CREATE TABLE mobipaid_split_settlements (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    crop_inventory_id UUID REFERENCES bulk_crop_inventory(id),
    mobipaid_transaction_uuid VARCHAR(150) UNIQUE NOT NULL,
    total_sale_price_zar NUMERIC(14, 2) NOT NULL,
    bsa_levy_remittance NUMERIC(14, 2) NOT NULL, -- 1.5% of Industry FGP
    commission_buyer_share NUMERIC(14, 2) NOT NULL,
    commission_seller_share NUMERIC(14, 2) NOT NULL,
    target_ik_council_id VARCHAR(100) NOT NULL,
    current_settlement_state settlement_status DEFAULT 'PENDING_ESCROW',
    settled_at TIMESTAMP WITH TIME ZONE
);

-- Indexing for high-velocity audit export
CREATE INDEX idx_settlement_status ON mobipaid_split_settlements(current_settlement_state);
CREATE INDEX idx_ik_council ON mobipaid_split_settlements(target_ik_council_id);
